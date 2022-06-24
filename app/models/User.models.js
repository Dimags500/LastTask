import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  // firstName: { type: String },
  // lastName: { type: String },
  // accountId: { type: String },
  // age: { type: String },

  accountId: { type: String },
  age: { type: String },
});

const User = mongoose.model("users", userSchema);

export { User };
