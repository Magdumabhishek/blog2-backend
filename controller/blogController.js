const Blog = require("../model/blog")

exports.getBlog = async (req,res) => {
    try {
        const data = await Blog.find().populate("userId")
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
} 

exports.postBlog = async (req,res) => {
    try {
        const data = await Blog.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.updateBlog = async (req,res) => {
    try {
        const data = await Blog.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.status(400).json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.deleteblog = async (req,res) => {
    try {
        const data = await Blog.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

