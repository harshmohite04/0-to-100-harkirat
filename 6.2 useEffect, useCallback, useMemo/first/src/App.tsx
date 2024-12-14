import { useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);
  
  const sum = useMemo(()=>{
    let summ = 0;
    for (let i =0;i<=value;i++){
      summ+=i
    }
    return summ
  },[value])  
  return (
    <>
      <input onChange={(e) => setValue(Number(e.target.value))} />
      <br />
      Sum is {sum} <br />
      <button
        onClick={() => {
          setCount(count+1)
        }}
      >
        Counter {count}
      </button>
    </>
  );
}

export default App;
