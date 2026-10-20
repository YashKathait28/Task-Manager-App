const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const router = require("./routes/taskRoutes");

dotenv.config();

app.use(express.json());
app.use(cors());


connectDB();

app.get("/",(req, res) => {
    res.send("Connected to backend Successfully!");
})

app.use("/api/tasks", router);

app.listen(PORT, ()=>{
    console.log("Connected Successfully!");
})