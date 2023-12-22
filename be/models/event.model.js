const { Schema, mongoose } = require("mongoose");

const DOCUMENT_NAME = "Event";
const COLLECTION_NAME = "Events";
const schema = new Schema(
  {
    title: String,
    description: String,
    location: String,
    date: String,
    image: String,
    isFeatured: Boolean,
  },
  { timestamps: true, collection: COLLECTION_NAME }
);

module.exports = mongoose.model(DOCUMENT_NAME, schema);
