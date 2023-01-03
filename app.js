const express = require("express");

const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on port:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
