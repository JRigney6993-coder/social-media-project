import mongoose from "mongoose";
const { Schema } = mongoose;

const postSchema = new Schema({
    "title": {
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
    "category": {
        type: String,
        validate:{validator: (value)=>{return typeof value === "string"}},
        required: true,
        trim: true,
        enum: ["comedy", "drama", "news", "tutorials", "sports"]
    },
    "people_like": {
        type: Array,
        validate:{validator: (value)=>{
            value.every(x => typeof x["_id"] === "string")
        }},
        default: [],
        trim: true
    },
    "author":{
        type: String,
        validate:{validator: (value)=>{return typeof value === "string"}},
        required: true,
        trim: true
    },
    "author_link":{
        type: String,
        validate:{validator: (value)=>{return typeof value === "string"}},
        required: true,
        trim: true
    },
    "author_pic":{
        type: String,
        validate:{validator: (value)=>{return typeof value === "string"}},
        required: true,
        trim: true
    },
    "create_date":{
        type: String,
        validate:{validator: (value)=>{return typeof value === "string"}},
        required: true,
        trim: true
    }

}, { collection: 'Threads'})

const myDB = mongoose.connection.useDb('Posts');
const Post = myDB.model('Post', postSchema);
export default Post