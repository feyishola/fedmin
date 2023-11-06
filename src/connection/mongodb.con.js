const mongoose = require("mongoose");

module.exports = async () => {
  const dbcon = mongoose.connection;

  dbcon
    .on("connected", () => {
      console.log("connected to mongodb");
    })
    .on("error", (err) => {
      console.log("error occured connecting to mongodb", err.message);
    })
    .on("disconnected", () => {
      setTimeout(async () => {
        await mongoose.connect(process.env.MONGO_URI);
      }, 3000);
    });

  await mongoose.connect(process.env.MONGO_URI);
};
