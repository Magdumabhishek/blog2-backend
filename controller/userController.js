const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const User = require("../model/user")

exports.getUser = async (req,res) => {
    try {
        const data = await User.find().populate("userId")
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.postUser = async (req,res) => {
    try {
        const userExist = await User.findOne({email:req.body.email})
        if (userExist) return res.status(500).json({errors:true,message:"User Already Exists"})
            req.body.password = await bcrypt.hash(req.body.password,10)
        const data = await User.create(req.body)
        return res.json({errors:false,message:"User Created Succefully"})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.updateUser = async (req,res) => {
    try {
        const data = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:true,message:"data updated Successfully"})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.deleteUser = async (req,res) => {
    try {
        const data = await User.findByIdAndDelete(req.params.id)
        return res.json({errors:false,message:"User Deleted Successfully"})
    } catch (error) {
        return res.status(400).json({error:true,message:error.messasge})
    }
}

exports.login = async (req,res) => {    
    try {
        const userExist = await User.findOne({email:req.body.email})
        if (!userExist) return res.json({errors:true,message:"invalid emaill or password"})
            const comparePassword = await bcrypt.compare(req.body.password,userExist.password)

        if(!comparePassword) return res.status(400).json({errors:true,message:"invalid email or password"})
            const token = await jwt.sign({id:userExist._id},process.env.SEC)
            return res.json({errors:false,data:{token:token,message:"Logged in Successfully"}}) 
        }
        catch (error) {
            return res.status(400).json({errors:false,message:error.message})
        }
    
}