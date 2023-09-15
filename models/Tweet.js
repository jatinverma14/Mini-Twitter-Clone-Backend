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
      defaultValue: "",
    },
    likes: {
      type: Array,
      defaultValue: [],
    },
    isEdited: {
      type: Boolean,
      default: false,
    },
    tweetImage: { type: String, defaultValue: "" },
  },
  { timestamps: true }
);

export default mongoose.model("Tweet", TweetSchema);
