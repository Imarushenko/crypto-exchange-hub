import mongoose from "mongoose";

const ClickSchema = new mongoose.Schema({
  exchange: String,
  country: String,
  timestamp: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Click ||
  mongoose.model("Click", ClickSchema);