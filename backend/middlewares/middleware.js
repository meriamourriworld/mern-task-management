var jwt = require('jsonwebtoken');
require("dotenv").config();

module.exports.isAuth = async (req, res, next)=>
{
    let token;
    const authHeader = req.headers.Authorization || req.headers.authorization;
    try {
        if(authHeader && authHeader.startsWith("Bearer"))
        {
            token = authHeader.split(" ")[1];
            if(!token){ throw new Error("You're not authorized!");}

            const currentUser = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            req.currentUser = currentUser;
            next();
        }
        else
        {
            throw new Error("You're not authorized!");
        }
    } catch (error) {
        return res.status(400).json({success:false, message: "Access Denied !", error: error.message});
    }
}
