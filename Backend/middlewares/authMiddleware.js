const jwt = require("jsonwebtoken");

const userAuth = async (req, res, next) => {
    // const authHeader = req.headers.authorization;
    const token = req.cookies?.token;

    if (!token){
        return res.status(401).json({
            success: false,
            message: "Access denied. No token provided!",
        })
    }

    // if(!authHeader || !authHeader.startsWith("Bearer ")) {
    //     return res.status(401).json({
    //         success: false,
    //         message: "Access denied. No token provided!"
    //     })
    // }

    // const token = authHeader.split(" ")[1];
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.userId = decoded.userId;

        next();
    } catch(error){
        return res.status(401).json({
            message: "Invalid cerdentials or expired token!"
        })
    }
};

module.exports = userAuth;