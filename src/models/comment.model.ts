import mongoose, {Schema, Document} from "mongoose";

interface IComment extends Document {
    idPost: string;
    idUsuario: string;
    comentario: string;
}

const commentSchema = new Schema<IComment>({
    idPost: { type: String, required: true },
    idUsuario: { type: String, required: true },
    comentario: { type: String, required: true }
});

export default mongoose.model<IComment>("Comment", commentSchema);