import mongoose from 'mongoose'

const blogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    thumbnail:{
     data:Buffer,
     contentType:String
    }
},{timestamps:true})

export default mongoose.model('Blogs',blogSchema)