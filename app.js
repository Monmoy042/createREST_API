const express = require("express");

const app = express();
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 8000;

const products_routes = require("./routes/products");

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

// middleware or set router
app.use("/api/products", products_routes);

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
