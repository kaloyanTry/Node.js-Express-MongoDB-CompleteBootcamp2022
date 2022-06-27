const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A user must have a name'],
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please, provide a valid email.'],
  },
  photo: {
    type: String,
  },
  password: {
    type: String,
    required: [true, 'Please, provide a password'],
    trim: true,
    unique: true,
    minlength: [8, 'A user name must be at least 6 character'],
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please, confirm your password'],
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
