const mongoose = require("mongoose");

const uri =
  "mongodb+srv://monmoy:Mn4lLgSmOIDOW8WX@productsapi.v3wty4s.mongodb.net/productsapi?retryWrites=true&w=majority";

const connectDB = () => {
  console.log("DB is Connected");
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
