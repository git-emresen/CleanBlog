const mongoose=require("mongoose")
const schema=require("mongoose").Schema

const PostSchema=new schema({
    title:String,
    detail:String,
    dateCreated:{
        type:Date,
        value:Date.now
    }
})

const AddPost=mongoose.model("AddPost",PostSchema)
module.exports=AddPost