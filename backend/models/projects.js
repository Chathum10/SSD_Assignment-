const mongoose = require("mongoose");

// Define the Projects Schema
const projectsSchema = new mongoose.Schema({
  // Client Name

  cName: {
    type: String,
    required: true,
  },
  // Client Email Address
  email: {
    type: String,
    required: true,
  },
  // Client Contact Number
  contactNo: {
    type: String,
    required: true,
  },
  // Project Description
  description: {
    type: String,
  },
  // Project ID
  projectId: {
    type: String,
    required: true,
  },
  // Department responsible for the Project
  dept: {
    type: String,
    required: true,
  },
  // Project Level (e.g., High Priority, Low Priority)
  pLevel: {
    type: String,
    required: true,
  },
  // Start Date of the Project
  sDate: {
    type: String,
    required: true,
  },
  // End Date of the Project
  eDate: {
    type: String,
    required: true,
  },
  // Remarks (Additional Information)
  remarks: {
    type: String,
  },

  // Calculation part for Project Progress
  // Task 1 Progress
  t1: {
    type: String,
  },
  // Task 2 Progress
  t2: {
    type: String,
  },
  // Task 3 Progress
  t3: {
    type: String,
  },
  // Task 4 Progress
  t4: {
    type: String,
  },
  // Task 5 Progress
  t5: {
    type: String,
  },
  // Overall Project Progress (defaulted to "Status Pending")
  progress: {
    type: String,
    default: "Status Pending",
  },
});

// Export the Projects model with the defined schema
module.exports = mongoose.model("projects", projectsSchema);
