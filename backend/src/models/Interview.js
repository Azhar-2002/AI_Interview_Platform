import mongoose from "mongoose";

const interviewSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  problemTitle: {
    type: String,
    default: "Two Sum"
  },
  code: {
    type: String,
    default: ""
  },
  language: {
    type: String,
    default: "javascript"
  },
  status: {
    type: String,
    enum: ["active", "completed"],
    default: "active"
  }
}, { timestamps: true });

export default mongoose.model("Interview", interviewSchema);