import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { noteRoute } from "./routes/note.route.js";

dotenv.config({
    path: "./.env",
});

const port = process.env.PORT || 3001;

const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URI,
}));

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("MONGODB connected!");
})
.catch((error) => {
    console.log("Error connecting to DB");
})

app.get("/", (req, res) => {
    res.json({SUCCESS_CODE: 1});
});

app.use("/api/note/", noteRoute);

app.listen(port, () => {
    console.log(`Server running at ${port}`);
})