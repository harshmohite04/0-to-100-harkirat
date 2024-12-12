const express = require("express");
const app = express();
app.use(express.json());
const { createTodo, updateTodo } = require("./types.js");
const { todo } = require("./db");

const cors = require('cors')
app.use(cors({
  origin:"http://localhost:5173"
}))

app.post("/todo", async (req, res) => {
  const createPayloadTodo = req.body;
  const parsedPayload = createTodo.safeParse(createPayloadTodo);
  if (!parsedPayload) {
    res.status(411).json({
      msg: "You sent the wrong input",
    });
    return;
  }
  // put in mongodb
  await todo.create({
    title: createPayloadTodo.title,
    description: createPayloadTodo.description,
    completed: false,
  });

  res.send({
    msg: "Todo created",
  });
});

app.get("/todos", async (req, res) => {
  const todos = await todo.find({});
  res.send(todos);
});

app.put("/completed", async (req, res) => {
  const updatePayloadTodo = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayloadTodo);
  if (!parsedPayload) {
    res.status(411).json({
      msg: "You sent the wrong input",
    });
    return;
  }
  await todo.update(
    {
      id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "Todo marked is completed",
  });
});

app.listen("3000", () => {
  console.log("Server is listening on port 3000");
});
