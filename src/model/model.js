const { model, Schema } = require("mongoose");

const ministrySchema = new Schema({
  name: { type: String },
  acronym: { type: String },
  ministerName: { type: String },
  url: { type: String },
  logo: { type: String },
});

const minstryModel = model("ministry", ministrySchema);

module.exports = minstryModel;
