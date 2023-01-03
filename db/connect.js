const mongoose = require("mongoose");

const connectDB = (uri) => {
  console.log("DB is Connected");
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
