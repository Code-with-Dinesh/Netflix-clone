const UserModel = require("../modals/usermodel");
const bcrypt = require("bcrypt");
const { json } = require("express");
const jwt = require('jsonwebtoken')
// Login function
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Check if email and password are provided
        if (!email || !password) {
            return res.status(401).json({ success: false, message: "Both are Required Fields" });
        }
        
        // Find the user by email
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ success: false, message: "Email does not exist" });
        }
        
        // Check if the password matches
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid Credentials" });
        }

        // Generate JWT token
        const token = jwt.sign({ email, userId: user._id }, "MERN STACK", { expiresIn: '1h' });

        // Set the JWT token in a cookie and send the response
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Only secure in production
        });

        return res.status(200).json({ success: true, message: "Login successful" });
        
    } catch (error) {
        console.log(`Error while logging in user:`, error);
        return res.status(500).json({ success: false, message: "Server error" });
    }
};


// Create User function
const createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if all fields are provided
        if (!email || !password || !username) {
            return res.status(401).json({ success: false, message: "All fields are required" });
        }

        // Check if the user already exists
        const checkUser = await UserModel.findOne({ email });
        if (checkUser) {
            return res.status(401).json({ success: false, message: "Email already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the user with the hashed password
        const user = await UserModel.create({
            email,
            username,
            password: hashedPassword,
        });

        // Generate the token
        const token = jwt.sign({ email, userId: user._id }, "MERN STACK", { expiresIn: '1h' });

        // Set the JWT token in a cookie and send the response
        res.cookie('token', token, {
            httpOnly: true,   
            secure: process.env.NODE_ENV === 'production',  // Only secure in production
           
        });

        // Send a success response
        res.status(201).json({ success: true, message: "User created successfully" });

    } catch (error) {
        console.log("Error while creating the user:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};


const logout = async (req, res) => {
    try {
        res.cookie('token', '', {
            httpOnly: true, 
            expires: new Date(0), 
            secure: process.env.NODE_ENV === 'production', 
        });

       
        res.status(200).json({ success: true, message: "User logged out successfully" });

    } catch (error) {
        console.log('Error while logging out:', error);
        res.status(500).json({ success: false, message: "Internal server error" }); // Handle the error
    }
};


// Export the functions
module.exports = { login, createUser ,logout};
