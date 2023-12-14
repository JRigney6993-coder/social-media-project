import Post from "../models/Posts.js";


export async function getPosts(req, res){
    const {category} = req.body;
    try {
        if(category !== "random") return res.status(200).json({
            success: true, 
            content: await Post.find({ category: 'test' }).toArray()
        })
    } catch (error) {
        res.status(500).json({success: false, error: err.message})
    }
}

export async function makePosts(req, res){
    const {title, content, category} = req.body;
    const {user_name, profile_pic} = req.user;
    try {
        const currentDate = new Date();
        const newPost = new Post({
            title, content, category, 
            author: user_name,
            author_link: user_name,
            author_pic: profile_pic,
            create_date: `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`
        })
        await newPost.validate();
        await newPost.save();
        res.status(200).json({success: true})
    }catch(err){
        res.status(500).json({success: false, error: err.message})
    }
}

export function updatePosts(req, res){

}

export function deletePosts(req, res){

}