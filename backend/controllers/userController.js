const {User} = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require("dotenv").config();

/**
 * Allows a new user to register
 * @param {*} req 
 * @param {*} res 
 * @returns 
 * @throws error if username and email uniqueness is violated  
 */
module.exports.registerUser = async(req, res)=>
{
    const {username, email, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    try {
        // Check if another account with same username || email
        if(await checkUsername(username) !== false){throw new Error("This username is already taken!");}
        if(await checkEmail(email) !== false){throw new Error("This email is taken by another account!");}

        await User.insertMany({username, email, password : hashedPassword});
        return res.status(201).json({success: true, message: "You've been successfully registred!",username});
    } catch (error) {
        return res.status(400).json({success: false, message: `Problem while creating the account`, error: error.message})
    }
};

/**
 * Allows a user to login
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */

module.exports.login = async(req, res)=>
{
    const {username, password } = req.body;
    try {
        if(!username || !password){throw new Error("Credentials are required !");}
        //No account with this email
        const account = await checkUsername(username);
        if(account === false) {return res.status(400).json({success: false, message : "Invalid username!"})}
        //Compare the password
        const result = await bcrypt.compare(password, account[0].password);
        if(!result) return res.status(400).json({success : false, message : "Invalid password !"});
        //Logged in
        const accessToken = jwt.sign({username: account[0].username, email: account[0].email, _id: account[0]._id}, process.env.ACCESS_TOKEN_SECRET)
        return res.status(200).json({success: true, message: "Welcome back", token: accessToken, user: account[0]});
    } catch (error) {
        res.status(400).json({success: false, message: "Can't sign-in!", error : error.message});
    }
}


/**
 * 
 * @param {String} username 
 * @returns {Boolean} true if an account with same username is found
 */
const checkUsername = async(username)=>
{
    const account = await User.find({username});
    return account.length >0 ? account : false;
}

/**
 * 
 * @param {String} email 
 * @returns {Boolean} true if an account with same email is found
 */
const checkEmail = async(email)=>
    {
        const account = await User.find({email});
        return account.length >0 ? account : false;
    }
