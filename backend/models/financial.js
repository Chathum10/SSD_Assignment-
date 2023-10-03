const mongoose = require("mongoose");

// Define the Financial Schema
const financialSchema = new mongoose.Schema({
  // Financial ID

  fId: {
    type: String,
    required: true,
  },

  // Total Income
  totalIncome: {
    type: String,
    required: true,
  },

  // Total Outcome
  totalOutcome: {
    type: String,
    required: true,
  },

  // Money (e.g., Currency or Amount)
  money: {
    type: String,
    required: true,
  },

  // Date (e.g., Transaction Date)
  date: {
    type: String,
    required: true,
  },

  // Status (e.g., Payment Status)
  status: {
    type: String,
    required: true,
  },

  // Week of Income Forecast
  ifweek: {
    type: String,
    required: true,
  },

  // Week of Income Actual
  isweek: {
    type: String,
    required: true,
  },

  // Week of Income Target
  itweek: {
    type: String,
    required: true,
  },

  // Week of Outcome Forecast
  ifoweek: {
    type: String,
    required: true,
  },

  // Week of Income Forecast (for Incremental)
  ifiweek: {
    type: String,
    required: true,
  },

  // Week of Outcome Actual
  ofweek: {
    type: String,
    required: true,
  },

  // Week of Outcome Forecast (for Incremental)
  osweek: {
    type: String,
    required: true,
  },

  // Week of Outcome Target
  otweek: {
    type: String,
    required: true,
  },

  // Week of Outcome Forecast (for Decremental)
  ofoweek: {
    type: String,
    required: true,
  },

  // Week of Outcome Forecast (for Incremental)
  ofiweek: {
    type: String,
    required: true,
  },

  // Week of Income Forecast (for Decremental)
  ifweekd: {
    type: String,
    required: true,
  },

  // Week of Income Actual (for Decremental)
  isweekd: {
    type: String,
    required: true,
  },

  // Week of Income Target (for Decremental)
  itweekd: {
    type: String,
    required: true,
  },

  // Week of Outcome Forecast (for Decremental)
  ifoweekd: {
    type: String,
    required: true,
  },

  // Week of Income Forecast (for Incremental)
  ifiweekd: {
    type: String,
    required: true,
  },

  // Week of Outcome Actual (for Decremental)
  ofweekd: {
    type: String,
    required: true,
  },

  // Week of Outcome Forecast (for Incremental)
  osweekd: {
    type: String,
    required: true,
  },

  // Week of Outcome Target (for Decremental)
  otweekd: {
    type: String,
    required: true,
  },

  // Week of Outcome Forecast (for Decremental)
  ofoweekd: {
    type: String,
    required: true,
  },

  // Week of Outcome Forecast (for Incremental)
  ofiweekd: {
    type: String,
    required: true,
  },
});

// Export the Financial model with the defined schema
module.exports = mongoose.model("Financial", financialSchema);
