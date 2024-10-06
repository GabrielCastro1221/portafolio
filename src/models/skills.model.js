const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    starting_date: { type: Date, required: true },
    ending_date: { type: Date, required: true },
    degree: { type: String, required: true },
    skills: { type: String, required: true },
  },
  { timestamps: true, timeseries: false }
);

module.exports = mongoose.model("Skills", schema);
