import Post from "../models/Posts.js";


export async function getPosts(req, res){
    const {type, num} = req.params;
    try {
        var data;
        if(type !== "random") data = await Post.find({ category: type }).limit(6 * num);
        else data = await Post.aggregate([{ $sample: { size: 6 * num } }]);
        res.status(200).json({
            success: true, 
            content: data
        })
    } catch (error) {
        res.status(500).json({success: false, error: error.message})
    }
}
export async function getUserPosts(req, res){
    try {
        var data = await Post.find({ author: req.user["user_name"] });
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

export async function updatePosts(req, res){
    try {
        const {field, value} = req.body;
        const {id} = req.params;
        console.log(id);
        const updated_user = await Post.findOneAndUpdate(
            {"_id": id},
            {$set: {[field]: value}},
            {new: true}
        )
        if(updated_user)
            res.status(200).json({success: true, user: updated_user});
        else
            res.status(404).json({success: false});
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
}

export async function deletePosts(req, res){
    try{
        const {id} = req.params;
        const updated_user = await Post.findOneAndDelete({"_id": id})
        if(updated_user)
            res.status(200).json({success: true, user: updated_user});
        else
            res.status(404).json({success: false});
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
}