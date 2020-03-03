const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile_photo: {
    type: String, default: "https://res.cloudinary.com/dtdx0w1qa/image/upload/v1583151595/Appetitoso/profile_photo_vrjsfs.png"
  },
  email: { type: String, required: true },
  favDishes: [],
  status: {
    type: String,
    enum: ["inactive", "active"],
    default: `inactive`
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;

