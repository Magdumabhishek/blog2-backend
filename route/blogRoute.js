const {getBlog,postBlog,updateBlog,deleteblog} = require("../controller/blogController")
const auth = require("../middleware/auth")

const route = require("express").Router()

route.get("/",getBlog)
route.post("/",auth,postBlog)
route.put("/:id",auth,updateBlog)
route.delete("/:id",auth,deleteblog)

module.exports = route