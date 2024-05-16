const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); 

const register = async(req,res)=>{
    try {
        const {firstName,lastName,email,password} = req.body;
        const hashedPassword = await bcrypt.hash(password,12);
        const user = await User.findOne({email});
        if(user){
            return res.json({success: false,message: 'User already exists'});
        }
        const newUser = new User({
            name : `${firstName} ${lastName}`,
            email,
            password: hashedPassword
        });
        const result = await newUser.save();
        res.status(201).json({success: true,message: 'User Successfully Created!!',result});
    } catch (error) {
        console.error(error);
        res.status(500).json({success: false,message: error.message});
    }
}
const login = async (req, res)=>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.json({success: false,isUser: false,message: 'User not found'});
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.json({success: false,isUser: true,message: 'Invalid credentials'});
        }
        const token = jwt.sign({email: user.email, id: user._id}, process.env.JWT_SECRET, {expiresIn: '1d'});
        res.status(200).json({success: true, result: user, token,message: `Welcome ${user.name}`});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false,message: error.message});
    }
}

const auth = async(req,res)=>{
    try {
        const user = await User.findById(req.body.userId);
        if(!user){
            return res.json({success: false,message: 'User not found'});
        }
        res.status(200).json({success: true,data : {
            name: user.name,
            email: user.email
        },message: `Welcome ${user.name}!!`});
    }catch(error){
        console.log(error);
        res.status(500).json({success: false,message: error.message});
    }
}

module.exports = {
    login,
    register,
    auth
}