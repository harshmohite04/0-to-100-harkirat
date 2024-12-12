import React, { useState } from "react";

function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDes] = useState("");

  const handleSubmit = () => {
    fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
      }),
      headers: {
        "Content-type": "application/json",
      },
    }).then(async(res)=>{
        const json = await res.json();
        alert("todo added")
    })
  };
  return (
    <div>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => {
          const value = e.target.value;
          setTitle(value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="description"
        onChange={(e) => {
          const value = e.target.value;
          setDes(value);
        }}
      />
      <br />
      <button onClick={handleSubmit}>Add A todo</button>
    </div>
  );
}

export default CreateTodo;
