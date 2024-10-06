const mongosee = require("mongoose");

const schema = new mongosee.Schema(
  {
    img: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    repository_link: { type: String, required: true },
    deploy_link: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongosee.model("Projects", schema);
