import User from "../models/User.js";
import bcrypt from 'bcrypt';


async function hashPassword(password){
  return await bcrypt.hash(password, 10);
}


export async function createUser(req, res){
    try {
        const {name, user_name, email, password} = req.body;
        const newPerson = new User({
            name, user_name, email,
            password: await hashPassword(password),
        })
        await newPerson.validate();
        await newPerson.save();
        res.status(200).json({success: true})
    } catch (error) {
        res.status(500).json({success: false, error: error.message})
    }
}

export async function deleteUser(req, res){
    try{
        const {user} = req;
        const deleted = await User.findOneAndDelete({_id: user["_id"]})
        deleted ? res.status(202).json({message: true}) : res.status(403).json({message: false});
    }catch(e){
        res.status(500).json({ message: 'Server Error', error: e });
    }
}


export async function getUser(req, res){
    try{
        const {person} = req.params;
        const account_user = await User.findOne({user_name: person});
        account_user ? res.status(200).json({success: true, user: account_user}) : res.status(400).json({success: false});
    }catch(e){
        res.status(500).json({success: false, message: e.message});
    }
}

export async function getEditUser(req, res){
    try {
        res.status(200).json({success: true, user: req.user});
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
}

export async function updateUser(req, res){
    try {
        const {field, value} = req.body;
        const {user} = req.user;
        const updated_user = await User.findOneAndUpdate(
            {user_name: user["user_name"]},
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
