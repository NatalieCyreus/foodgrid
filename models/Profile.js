const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  handle: {
    type: String,
    reuired: true,
    max: 40
  },
  website: {
    type: String
  },
  skills: {
    trype: [String],
    required: true
  },
  bio: {
    type: String
  },
  recipes: [
    {
      title: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        default: Date.Now
      },
      about: {
        type: String
      }
    }
  ]
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
