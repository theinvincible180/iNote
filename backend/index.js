import connectDB from "./db.js";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 5000;

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.listen(PORT, async() => {
    await connectDB();
    console.log(`🚀 Server running on http://localhost:${PORT}`);
})