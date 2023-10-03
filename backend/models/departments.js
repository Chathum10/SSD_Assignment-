const mongoose = require("mongoose");

// Define the Departments Schema
const departmentsSchema = new mongoose.Schema({
  // Department Category (e.g., HR, IT, Finance)
  dCategory: {
    type: String,
    required: true,
  },
  // Department Name
  dName: {
    type: String,
    required: true,
  },
  // Department Email Address
  dEmail: {
    type: String,
    required: true,
  },
  // Teams within the Department
  dTeams: {
    type: String,
    required: true,
  },

  // Head of Department's Name
  hName: {
    type: String,
    required: true,
  },
  // Head of Department's Email Address
  hEmail: {
    type: String,
    required: true,
  },
  // Head of Department's Phone Number
  hNo: {
    type: String,
    required: true,
  },
  // Date of Department Update or Creation
  uDate: {
    type: String,
    required: true,
  },

  // Calculation part for Employee Count
  // Number of Permanent Employees
  permanent: {
    type: String,
  },
  // Number of Contract Employees
  contract: {
    type: String,
  },
  // Number of Interns
  interns: {
    type: String,
  },
  // Total Employee Count (defaulted to "N/A")
  total: {
    type: String,
    default: "N/A",
  },
});

// Export the Departments model with the defined schema
module.exports = mongoose.model("departments", departmentsSchema);
