const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const taskRouter = require("./routes/taskRoutes");
const authRouter = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");  


dotenv.config();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://task-manager-app-xuoy.vercel.app",
    "https://task-manager-app-fmjf.vercel.app"
  ],
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());


connectDB();

// app.get("/",(req, res) => {
//     res.send("Connected to backend Successfully!");
// })

app.use("/api/tasks", taskRouter);
app.use("/api/auth", authRouter);

app.listen(PORT, ()=>{
    console.log("Connected Backend Successfully!");
})