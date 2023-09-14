import mongoose from "mongoose";

const TweetSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      max: 11000,
    },
    likes: {
      type: Array,
      defaultValue: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Tweet", TweetSchema);