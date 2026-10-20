const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database Connected Successfully!");
    } catch(error){
            console.log("Failed to connect with DB!", error.message);
            process.exit(1);
    }
}

module.exports = connectDB;

