const { Schema } = require("mongoose");

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});
