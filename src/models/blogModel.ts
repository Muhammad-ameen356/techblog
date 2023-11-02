import mongoose from "mongoose";

const { Schema } = mongoose;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title"],
    },
    content: {
      type: String,
      required: [true, "Please provide a content"],
    },
    category: {
      type: String,
      //   required: [false, "Please select category"],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    user: {
      id: mongoose.Schema.Types.ObjectId,
      username: String,
      email: String,
      isVerified: Boolean,
      isActive: Boolean,
      isAdmin: Boolean,
    },

    meta: {
      votes: Number,
      favorites: Number,
    },
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    // },
    // username: {
    //   type: String,
    //   required: [true, "Please provide a username"],
    //   unique: [true, "ALready Exist"],
    // },
    // email: {
    //   type: String,
    //   required: [true, "Please provide an email"],
    //   unique: [true, "Already Exist"],
    // },

    //   category: {
    //     type: String,
    //   },
    //   tag: {
    //     type: Array<string>,
    //   },
  },
  { timestamps: true }
);

const Blog = mongoose.models.blogs || mongoose.model("blogs", blogSchema);

export default Blog;
