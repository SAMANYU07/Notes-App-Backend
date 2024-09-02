import express from "express";
import { addNote, deleteNote, getAllNotes, updateNote } from "../controllers/note.controller.js";

const router = express.Router();

router.get("/", getAllNotes);

router.post("/add/", addNote);

router.put("/update/:nid", updateNote);

router.delete("/delete/:nid", deleteNote);

export {router as noteRoute};