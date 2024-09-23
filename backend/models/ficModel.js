import mongoose from "mongoose";

const ficSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        date_published: {
            type: Date,
            required: true
        },
        date_updated: {
            type: Date,
            required: true
        },
        summary: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
    },
    {
        timestamps:true
    }
)

export const Fic = mongoose.model("Fic", ficSchema);