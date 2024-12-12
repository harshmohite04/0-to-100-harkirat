import { useState } from "react";
import "./App.css";

let counter = 4

const Header = (props) => {
  return <h1>{props.title}</h1>;
};
const HeaderBtn = () => {
  const [btn, setBtn] = useState("My name is Harsh");
  return (
    <>
      <button
        onClick={() => {
          setBtn(`My name is ${Math.random()}`);
        }}
      >
        Click me to change title
      </button>
      <h1>{btn}</h1>
    </>
  );
};

const Todo = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <h4>{props.description}</h4>
    </>
  );
};

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Go to gym", description: "4-5" },
    { id: 2, title: "Code along", description: "5-6" },
    { id: 3, title: "Go to class", description: "6-8" },
  ]);
  const addTodo = () => {
    setTodos([...todos,{
      id:counter++,
      title:"GO to random",
      description:'3-4'
    }]);
  };
  return (
    <>
      <button onClick={addTodo}>Add a todo</button>
      {todos.map((item) => (
        <Todo key={item.id} title={item.title} description={item.description} />
      ))}
    </>
  );
}

export default App;
