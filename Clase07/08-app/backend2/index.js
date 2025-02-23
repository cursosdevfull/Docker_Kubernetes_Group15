const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());

app.get("/healthcheck", (req, res) => res.send("Todo ok"));
app.get("/api/product", async (req, res) => {
  const products = [
    { id: 3, name: "product3" },
    { id: 4, name: "product4" },
  ];

  res.json(products);
});

const port = process.env.PORT ? Number(process.env.PORT) : 3020;

app.listen(port, () => console.log(`Server is running on port ${port}`));
