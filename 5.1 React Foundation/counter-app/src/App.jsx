import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

 
  return (
    <div>
    <Btn count={count} setCount={setCount}></Btn>
    </div>
  );
}

function Btn (props){
  function btnPressed(){
    props.setCount(props.count+1)
  }
  return <button onClick={btnPressed}> Counter is {props.count}</button>
}
export default App;
