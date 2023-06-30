import Header from "./components/header/Header";
import MainPart from "./components/mainPart/MainPart";
import { useState } from "react";

function App() {
  const [togleAi, setTogleAi] = useState(false)
  return (
    <div className="App">
      <Header togle = {togleAi} setToggle = {setTogleAi}></Header>
      <MainPart togle = {togleAi} ></MainPart>
    </div>
  );
}

export default App;
