import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    // subscribers: {
    //   type: Number,
    //   default: 0,
    // },
    // subscriptions: {
    //   type: [String],
    // },
    // fromGoogle: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
