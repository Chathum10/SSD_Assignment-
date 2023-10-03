const mongoose = require("mongoose");

// Define the Employee Schema
const employeeSchema = new mongoose.Schema({
  // Employee Name
  name: {
    type: String,
    required: true,
  },
  // National Identification Card (NIC)

  nic: {
    type: String,
    required: true,
  },
  // Gender of the Employee
  gender: {
    type: String,
    required: true,
  },
  // Contact Number of the Employee
  contactNo: {
    type: String,
    required: true,
  },
  // Email Address of the Employee
  email: {
    type: String,
    required: true,
  },
  // Employee ID
  empId: {
    type: String,
    required: true,
  },
  // Date of Joining the Company
  joinDate: {
    type: String,
    required: true,
  },
  // Due Date or End Date (e.g., Contract End Date) for the Employee
  dueDate: {
    type: String,
    required: true,
  },
  // Department to which the Employee belongs
  dept: {
    type: String,
    required: true,
  },
  // Job Designation of the Employee
  designation: {
    type: String,
    required: true,
  },

  // Calculation part for Employee Performance
  // Monthly Rating (if applicable)
  monthRating: {
    type: String,
  },
  // Overall Rating (defaulted to "0")
  overallRating: {
    type: String,
    default: "0",
  },
  // Total Months or Duration for Overall Rating Calculation
  overallmonths: {
    type: String,
  },
  // Employee Performance Status (defaulted to "Not Assigned")
  performance: {
    type: String,
    default: "Not Assigned",
  },
});

// Export the Employees model with the defined schema
module.exports = mongoose.model("employees", employeeSchema);
