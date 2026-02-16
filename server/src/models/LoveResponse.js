import mongoose from "mongoose";

const loveResponseSchema = new mongoose.Schema(
  {
    answers: [
      {
        question: { type: String, required: true },
        answer: { type: String, required: true }
      }
    ],
    generatedLetter: {
      nickname: String,
      loveLetter: String,
      teasing: String,
      futureDream: String,
      compatibility: Number
    }
  },
  { timestamps: true }
);


export default mongoose.model("LoveResponse",loveResponseSchema);