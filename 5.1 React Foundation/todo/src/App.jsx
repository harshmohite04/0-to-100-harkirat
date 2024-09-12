import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([
    {
      title: "Go to gym",
      description: " time : 7 to 9",
    },
    {
      title: "Do DSA",   
      description: " time : 9 to 10",
    },
  ]);
  return (
    <>

      {todo.map(function (todos) {
        return <Todo title={todos.title} description={todos.description} />;
      })}
    </>
  );
}


function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h3>{props.description}</h3>
    </div>
  );
}
export default App;



