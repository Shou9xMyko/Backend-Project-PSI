const express = require("express");
const bodyParser = require("body-parser");
const multiparty = require("connect-multiparty");
const cors = require("cors");

const port = 3500;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(multiparty());

app.get("/", (req, res) => {
  res.json({ Perhatian: "GASSIN BIAR CEPET KELAR YGY" });
});

app.listen(port, () => {
  console.log(`Server berjalan di localhost:${port}`);
});
