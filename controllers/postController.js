const AddPost = require('../models/AddPost')

exports.savePost = async (req, res) => {
    AddPost.create(req.body)
    res.redirect("/")
}

exports.getPost = async (req, res) => {
    const post = await AddPost.findById(req.params.id)
    res.render("post", {
        post
    })
}

exports.editPost = async (req, res) => {
    const post = await AddPost.findOne({ _id: req.params.id })
    post.title = req.body.title
    post.detail = req.body.detail
    post.save()
    res.render("editPost", {
        post
    })
}

exports.deletePost = async (req, res) => {
    await AddPost.findByIdAndDelete({ _id: req.params.id })
    res.redirect('/')
}