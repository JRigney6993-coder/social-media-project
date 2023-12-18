import Post from "../models/Posts.js";


export async function getPosts(req, res){
    const {type} = req.params;
    try {
        var data;
        if(type !== "random") data = await Post.find({ category: type }).limit(6);
        else data = await Post.aggregate([{ $sample: { size: 6 } }]);
        res.status(200).json({
            success: true, 
            content: data
        })
    } catch (error) {
        res.status(500).json({success: false, error: error.message})
    }
}
export async function getUserPosts(req, res){
    const {user} = req.params;
    try {
        var data = await Post.find({ author: user });
        res.status(200).json({
            success: true, 
            content: data
        })
    } catch (error) {
        res.status(500).json({success: false, error: error.message})
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