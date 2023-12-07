import mongoose from "mongoose";
const { Schema } = mongoose;

const postSchema = new Schema({
    "name": {
        type: String,
        validate:{validator: (value)=>{return typeof value === "string"}},
        required: true,
        trim: true
    },
    "content": {
        type: String,
        validate:{validator: (value)=>{return typeof value === "string"}},
        required: true,
        trim: true
    },
    "picture": {
        type: String,
        validate:{validator: (value)=>{return typeof value === "string"}},
        default: ""
    },
    "category": {
        type: String,
        validate:{validator: (value)=>{return typeof value === "string"}},
        required: true,
        trim: true
    },
    "people_like": {
        type: Array,
        validate:{validator: (value)=>{
            value.every(x => typeof x["_id"] === "string")
        }},
        required: true,
        trim: true
    }
}, {database: "Posts"}, { collection: 'Threads'})

const Post = mongoose.model('User', postSchema);
export default Post