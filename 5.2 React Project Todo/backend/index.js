const express = require("express");
const app = express();
const zod = require("zod");
app.use(express.json());
const { createTodo, updateTodo } = require("./types,js");

app.post("/todo", (req, res) => {
  const createPayloadTodo = req.body;
  const parsedPayload = createTodo.safeParse(createPayloadTodo);
  if (!parsedPayload) {
    res.status(411).json({
      msg: "You sent the wrong input",
    });
  }
  // put in mongodb
});

app.get("/todos", (req, res) => {});

app.put("/completed", (req, res) => {
  const updatePayloadTodo = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayloadTodo);
  if (!parsedPayload) {
    res.status(411).json({
      msg: "You sent the wrong input",
    });
  }
});

app.listen("3000", () => {
  console.log("Server is listening on port 3000");
});
