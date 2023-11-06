const { model, Schema } = require("mongoose");


const ministrySchema = new Schema({
    name: { type: String },
    acronym: { type: String },
    logo: { type: String }
});

module.exports = model("ministry", ministrySchema)