const mongoose = require ("mongoose");

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    repository_link: {
        type: String,
        required: true
    },
    deploy_link: {
        type: String,
        required: true
    },
    tecnology: {
        type: String,
        required: true
    }
},{ timestamps: true, versionKey: false });

module.exports = mongoose.model("projects", schema);