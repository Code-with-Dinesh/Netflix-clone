const UserModel = require("../modals/usermodel");
const bcrypt = require("bcrypt");

// Login function
const login = async (req, res) => {
    try {
        res.status(200).json({success:true,message:"login route success"})
       
        // Implement login logic here
    } catch (error) {
        console.log(`Error while logging in user:`, error);
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
        const user = new UserModel({
            username,
            email,
            password: hashedPassword, // Corrected variable name
        });

        // Save the new user
        await user.save();
        res.status(200).json({ success: true, message: "User created successfully" });
    } catch (error) {
        console.log("Error while creating the user:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// Export the functions
module.exports = { login, createUser };
