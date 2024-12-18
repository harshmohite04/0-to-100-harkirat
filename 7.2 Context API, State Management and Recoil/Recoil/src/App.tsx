import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import "./App.css";
import { countAtom } from "./store/atoms/count";
function App() {
  return (
    <>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </>
  );
}

const Count = () => {
  return (
    <>
      <CountRender />
      <Buttons />
    </>
  );
};

const CountRender = () => {
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
};
const Buttons = () => {
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </>
  );
};
export default App;
