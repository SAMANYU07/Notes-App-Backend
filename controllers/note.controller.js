import { Note } from "../models/note.models.js";

export const getAllNotes = async (req, res) => {
    try {
        const allNotes = await Note.find({});
        res.status(200).json(allNotes);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const addNote = async (req, res) => {
    try {
        const newNote = await Note.create(req.body);
        if (!newNote)
            return res.status(404).json({meessage: "Something went wrong"});
        res.status(200).json(newNote);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const updateNote = async (req, res) => {
    try {
        const updatedNote = await Note.findByIdAndUpdate(req.params.nid, req.body);
        if (!updatedNote)
            return res.status(404).json({message: "Something went wrong"});
        const nNote = await Note.findById(req.params.nid);
        res.status(200).json(nNote);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const deleteNote = async (req, res) => {
    try {
        const deleteNote = await Note.findByIdAndDelete(req.params.nid);
        if (!deleteNote)
            return res.status(404).json({message: "Note not found!"});
        res.status(200).json({message: "Note deleted!"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}