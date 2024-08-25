const express = require("express");
const zod = require("zod");
app = express();

const Schema = zod.array(zod.number());

const schema = zod.object({
  email: zod.string(),
  number: zod.string(),
  country: zod.literal("IN").or(z.literal("US")),
  kidney: zod.array(zod.number()),
});

app.use(express.json());

app.get("/", (req, res, next) => {
  const kidney = req.body.kidney;

  console.log(kidney);

  const response = Schema.safeParse(kidney);
  res.send({
    response,
  }); 
});

app.listen(3000, () => {
  console.log("Running on port 3000");
});
