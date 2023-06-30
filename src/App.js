import Header from "./components/header/Header";
import MainPart from "./components/mainPart/MainPart";
import { useState } from "react";
import Congrats from "./components/congrats/Congrats"

function App() {
  // const [togleAi, setTogleAi] = useState(false)
  return (
    <div className="App">
      
      {/* <Header togle = {togleAi} setToggle = {setTogleAi}></Header> */}
      <MainPart  ></MainPart>
      {/* <Congrats/> */}
    </div>
  );
}

export default App;
