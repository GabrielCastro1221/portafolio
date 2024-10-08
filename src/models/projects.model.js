const mongosee = require("mongoose");

const schema = new mongosee.Schema(
  {
    img: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String },
    repository_link: { type: String, required: true },
    deploy_link: { type: String, required: true },
  },
  { timestamps: true, timeseries: false }
);

module.exports = mongosee.model("Projects", schema);
