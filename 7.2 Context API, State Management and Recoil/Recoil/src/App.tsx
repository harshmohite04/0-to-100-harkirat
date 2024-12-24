import {
  RecoilRoot,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import "./App.css";
import { countAtom, evenSelector } from "./store/atoms/count";
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
  return (
    <div>
      {count}
      <EvenCount />
    </div>
  );
};

const EvenCount = () => {
  const isEven = useRecoilValue(evenSelector);
  return isEven ? <div>isEven</div> : null;
};
const Buttons = () => {
  const setCount = useSetRecoilState(countAtom);
  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Increase</button>
      <button onClick={() => setCount((c) => c - 1)}>Decrease</button>
    </>
  );
};
export default App;
