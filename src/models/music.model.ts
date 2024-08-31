import mongoose, { Schema } from "mongoose";

const MusicSchema = new Schema({
    _id: Schema.Types.UUID,
    title: String,
    album: String,
    artist: String,
    genre: String,
    path:String
});

const Music = mongoose.model('Music', MusicSchema);

export default Music;