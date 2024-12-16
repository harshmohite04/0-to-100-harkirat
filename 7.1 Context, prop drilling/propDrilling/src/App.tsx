import { useContext, useState } from "react";
import "./App.css";
import { CountContext } from "./context";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <CountContext.Provider value={count}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </>
  );
}

const Count = ({ setCount }: any) => {
  return (
    <>
      <CountRender />
      <Buttons setCount={setCount} />
    </>
  );
};

const CountRender = () => {
  const count = useContext(CountContext);
  return <div>{count}</div>;
};
const Buttons = ({ setCount }: any) => {
  const count = useContext(CountContext);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </>
  );
};
export default App;
