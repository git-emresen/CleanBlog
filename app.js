const express = require("express")
const ejs = require("ejs")
const path = require("path")
const fileUpload = require('express-fileupload')
const mongoose=require("mongoose")
const methodOverride=require('method-override')
const AddPost=require("./models/AddPost")
const pageController=require('./controllers/pageController')
const postController=require('./controllers/postController')

const app = express()

mongoose.connect("mongodb://127.0.0.1:27017/cleanblog-test-db")

app.set("view engine", "ejs")
app.use(fileUpload()) //enctype="multipart/form-data" kullanmak için
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(methodOverride('_method',{
  methods:['POST','GET']
}))


app.get("/", pageController.getIndex)
app.get("/addpost", pageController.getAddPost)
app.get("/editpost/:id",pageController.getEditPost)

app.post("/savepost", postController.savePost)
app.get("/posts/:id", postController.getPost)
app.put("/editPost/:id", postController.editPost)
app.get("/posts/deletepost/:id",postController.deletePost)

const port = 3000
app.listen(port, () => {
  console.log(`Server listening on port ${3000}`)
})

