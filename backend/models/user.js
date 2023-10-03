const mongoose = require("mongoose");

// Define the User Schema
const UserSchema = new mongoose.Schema(
  {
    // User's Full Name

    name: {
      type: String,
      trim: true, // Trim whitespace from the beginning and end of the string
      required: true, // This field is required
    },
    // User's Email Address
    email: {
      type: String,
      trim: true, // Trim whitespace from the beginning and end of the string
      required: true, // This field is required
    },
    // User's Password (You may want to consider additional security measures for passwords)
    password: {
      type: String,
      required: true, // This field is required
    },
  },
  { timestamps: true } // Automatically add createdAt and updatedAt timestamps
);

// Export the User model with the defined schema
module.exports = mongoose.model("User", UserSchema);
