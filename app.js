const express = require("express");
const ejs = require("ejs");
const path = require("path");
const mongoose=require("mongoose");
const AddPost=require("./models/AddPost")

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/cleanblog-test-db")

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get("/", async (req, res) => {
  const posts= await AddPost.find({})
  res.render("index",{
     posts
  })
});

app.get("/add", (req, res) => {
  res.render("post");
});

app.post("/post", async (req, res) => {
  AddPost.create(req.body)
  res.redirect("/")
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${3000}`);
});
