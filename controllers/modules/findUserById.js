const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true, // ทำให้ userId เป็น Primary Key
  },
  info: {
    age: {
      type: Number,
    },
    gender: {
      type: String,
    },
    weight: {
      type: Number,
    },
    height: {
      type: Number,
    },
  },
  activity: {
    type: Number,
  },
  target: {
    type: Number,
  },
});

// สร้างโมเดลจาก Schema
const User = mongoose.model("users", UserSchema);

module.exports = User;
