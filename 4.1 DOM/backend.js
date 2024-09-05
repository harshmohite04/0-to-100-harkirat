const express = require("express");

const app = express();
const cors = require("cors");
app.use(cors());

app.get("/sum", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  return res.send((a + b).toString());
});

app.listen("3000", () => console.log("backend is on"));
