const mongoose=require("mongoose")
const schema=mongoose.Schema

const PostSchema=new schema({
    title:String,
    detail:String,
    dateCreated:{
        type:Date,
        default:Date.now()
    }
})

const AddPost=mongoose.model("AddPost",PostSchema)
module.exports=AddPost