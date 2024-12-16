import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Landing from "./components/Landing";

function App() {
  return (
    <div>
      <div style={{ display: "flex" }}>
       <button onClick={()=>{window.location.href="/dashboard"}}>Landing</button>
       <button onClick={()=>{window.location.href="/"}}>Dashboard</button>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
