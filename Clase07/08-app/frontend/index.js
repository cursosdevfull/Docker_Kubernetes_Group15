const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.static("./public"));

app.get("/healthcheck", (req, res) => res.send("Todo ok"));
app.get("/api/config", (req, res) => {
  res.json({
    backend1: process.env.BACKEND1 || "http://localhost:3010/api/product",
  });
});

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
