import mongoose from "mongoose";

const noteSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        noteContent: {
            type: String,
            required: false,
            default: "",
        },
        bookmark: {
            type: Boolean,
            default: false,
            required: false,
        },
    }, {timestamps: true});

export const Note = mongoose.model("Note", noteSchema);