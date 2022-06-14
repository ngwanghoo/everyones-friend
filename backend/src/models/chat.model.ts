import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  nickname: String,
  date: String,
  content: String,
  roomId: String,
  // url: String,
});

export const Chat = mongoose.model("Chat", chatSchema);
