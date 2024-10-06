const UserModel = require("../modals/usermodel")

module.exports =  createUser  = async (req,res)=>{
   try {
    const {username,email,password} = req.body;
    if(!email || !password || !username){
       return res.status(401).json({success:false,message:"All Fields are requried"})
    }
    const checkuser =  await UserModel.findOne({email})
    if(checkuser){
        return res.status(401).json({success:false,message:"Email is Already Exists"})
    }

    const user = await UserModel({
        username,
        email,
        password,
    })
    await user.save();
    res.status(200).json({success:true,message:"User Created Successfully"})
   } catch (error) {
       console.log("Error while creating the user",error)
   }

}