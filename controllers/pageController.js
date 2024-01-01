const AddPost=require('../models/AddPost')

exports.getAddPost=(req, res) => {
    res.render("addpost")
  }

exports.getIndex= async (req, res) => {
    const posts= await AddPost.find({})
    res.render("index",{
       posts
    })
  }

  exports.getEditPost= async (req,res)=>{
    const post=await AddPost.findById(req.params.id)
    res.render("editPost",{
      post
    })
  }