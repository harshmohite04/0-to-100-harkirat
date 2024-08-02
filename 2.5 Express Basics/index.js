const express = require("express");
const app = express();

function sum(a,b){
  return a + b;
};
app.get("/", (req, res) => {
  const x = req.query.x;
  const y = req.query.y;
  const ans = sum(x, y);
  res.send(ans.toString());
});

app.listen(3001);
