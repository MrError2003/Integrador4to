import mongoose, {Schema, Document} from "mongoose";

interface IFish extends Document {
    idFish: string;
    commonName: string;
    scientificName: string;
    fishImage: string;
}

const commentSchema = new Schema<IFish>({
    idFish: {type: String, required: true},
    commonName: {type: String, required: true},
    scientificName: {type: String, required: true},
    fishImage: {type: String, required: false},
});

export default mongoose.model<IFish>("Fish", commentSchema);