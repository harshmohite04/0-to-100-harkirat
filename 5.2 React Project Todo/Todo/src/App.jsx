import React, { useState, useEffect } from "react";
import CreateTodo from "../components/CreateTodo";
import Todos from "../components/Todos";

const App = () => {
  const [todos, setTodos] = useState([]);

  // const responpse =  fetch("http://localhost:3000/todos").then(async (res)=>{
  //   const data = await res.json();
  //       console.log(data)
  //       setTodos(data);
  // })
        
  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
};

export default App;
