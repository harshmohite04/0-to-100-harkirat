import { useEffect, useState } from "react";
import "./App.css";

const CardWrapper = (props) => {
  return <div style={{ border: "2px solid black" }}>{props.children}</div>;
};

function App() {
  useEffect( () => {
    // const response =   fetch("https:harsh");
    // const data = response.json()

    alert("Hii there")
  }, []);

  return (
    <>
      <CardWrapper>hi there</CardWrapper>
    </>
  );
}
 
export default App;
