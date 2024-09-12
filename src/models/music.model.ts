import { randomUUID } from "crypto";
import mongoose, { Schema } from "mongoose";

const MusicSchema = new Schema({
  _id: {
    type: Schema.Types.String,
    default: randomUUID().toString(),
  },
  title: String,
  album: String,
  artist: String,
  genre: String,
  path: String,
});
const Music = mongoose.model("Music", MusicSchema);

export default Music;
