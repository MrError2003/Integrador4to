import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";

interface IPost extends Document {
    title: string;
    content: string;
    image: string;
    createdAt: Date;
    updatedAt: Date;
}

const postSchema = new Schema<IPost>({
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model<IPost>("Post", postSchema);
