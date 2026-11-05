const user = require("../models/authModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


// Register User
const userRegister = async (req, res) => {
  const { username, email, password } = req.body;
 
  try {
    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Failed to store data!",
      });
    }

    if (username.trim() == "" || email.trim() == "" || password.trim() == "") {
      return res.status(400).json({
        success: false,
        message: "Enter the required fields!",
      });
    }

    const normalizeEmail = email.trim().toLowerCase();

    const existingUser = await user.findOne({ email: normalizeEmail });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email is already registered!",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12)    

    const response = await user.create({
      username: username,
      email: email,
      password: hashedPassword,
      isVerified: true,
    });

    return res.status(201).json({
      message: "You are registered now!",
      response: {
        user_Id: response._id,
        username: username,
        email: email,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// Login User
const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(  400).json({
        success: false,
        message: "User not found",
      });
    }

    if (email.trim() == "" || password.trim() == "") {
      return res.status(400).json({
        success: false,
        message: "Enter the required fields!",
      });
    }

    const normalizeEmail = email.trim().toLowerCase();

    const checkUser = await user.findOne({ email: normalizeEmail });

    if (!checkUser) {
      return res.status(404).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, checkUser.password);

    if (!isPasswordCorrect) {
      return res.status(404).json({
        success: false,
        message: "Invalid password",
      });
    }

    if (!checkUser.isVerified) {
      return res.status(400).json({
        success: false,
        message: "Please verify your email first, register your self!",
      });
    }

    const token = jwt.sign(
      { userId: checkUser._id.toString()},
      process.env.JWT_SECRET,
      { expiresIn: "7d"}
    )

    const isProduction = process.env.NODE_ENV === "production";

    res.cookie("token", token, {
      httpOnly: true,
      secure: isProduction, 
      sameSite: isProduction? "none": "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    })

    return res.status(200).json({
      success: true,
      message: "Successful Login",
      checkUser: {
        id: checkUser._id,
        email: checkUser.email
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// Logout User
const userLogout = async (req, res) => {
  try{
    const isProduction = process.env.NODE_ENV === "production";
    res.clearCookie("token", {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction? "none" : "lax",})

    return res.status(200).json({
      success: true,
      message: "Logout Successfully!",
  })
  } catch(error){
    return res.status(500).json({
      success: false,
      message: "Logout Failed!", error,
    })
  }
  
}

// Auth Protected Route
const authProtectedRoute = async (req, res) => {
  try {
    const token = req.cookies?.token;

    if(!token){
      return res.status(401).json({
        success: false,
        message: "Not Authenticated",
      })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    return res.status(200).json({
      success: true,
      user: decoded,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    })
  }
}

// Display all users
// const allUsers = async (req, res) => {
//   try {
//     const users = await user.find();

//     if (!users) {
//       return res.status(404).json({
//         success: false,
//         message: "No user found",
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       message: "Showing all the users",
//       users: {
//         count: users.length,
//         users,
//       },
//     });
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

module.exports = { userRegister, userLogin, userLogout, authProtectedRoute };
