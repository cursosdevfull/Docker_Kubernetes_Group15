const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());

app.get("/healthcheck", (req, res) => res.send("Todo ok"));
app.get("/api/product", async (req, res) => {
  const backend2 = process.env.BACKEND2 || "http://localhost:3020/api/product";
  const response = await axios.get(backend2);

  const productsBackend1 = [
    { id: 1, name: "product1" },
    { id: 2, name: "product2" },
  ];

  const productsBackend2 = response.data;

  res.json([...productsBackend1, ...productsBackend2]);
});

const port = process.env.PORT ? Number(process.env.PORT) : 3010;

app.listen(port, () => console.log(`Server is running on port ${port}`));
