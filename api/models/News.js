import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    location: {
      type: String,
    },
    content: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
    },
    categories: {
      type: Array,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isFlash: {
      type: Boolean,
      default: false,
    },
    isHotNews: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
export default mongoose.model("News", newsSchema);
