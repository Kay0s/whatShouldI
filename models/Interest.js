const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InterestSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  start: {
    type: Date,
  },

  end: {
    type: Date,
  },

});

const Interest = mongoose.model("interests", InterestSchema);

module.exports = Interest;
