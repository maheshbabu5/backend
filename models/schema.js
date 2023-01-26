const mongoose = require("mongoose");
const instaSchema = new mongoose.Schema({
    file: { type: String, required: true },
    Author: { type: String, required: true },
    Location: { type: String, required: true },
    Description: { type: String, required: true },
    Likes: { type: Number },
    Date: { type: Date }
});

const InstaPost = mongoose.model("InstaPost", instaSchema);
module.exports = InstaPost;