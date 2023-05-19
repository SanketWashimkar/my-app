import "./App.css";
import Add from "./components/Add/Add";
import Sub from "./components/Sub/Sub";
import { useState } from "react";
function App() {
  const [inputValue, setInputValue] = useState(0);
  //console.log('inputValue',inputValue);
  //console.log('setInputValue',setInputValue);
  const [addValue, setaddValue] = useState(0);
  const printValue = () => {
    //console.log("inputeValue printValue", inputValue);
    return inputValue;
  };
  return (
    <div>
      <h1>Welcome React First App </h1>
      <div>
        <input
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
      //      console.log("inputValue", inputValue);
          }}
          type="number"
          placeholder="Enter Number"
        />
      </div>
      <div>
        <input
          value={addValue}
          onChange={(e) => {
            setaddValue(e.target.value);
        //    console.log("addValue", addValue);
          }}
          type="number"
          placeholder="Enter Number"
        />
      </div>

      <p>Add Number{inputValue}</p>
      <p>Add value{addValue}</p>
      <button onClick={printValue}>Print </button>
      <Add a={inputValue} b={addValue}></Add>
      <Sub a={inputValue} b={addValue}></Sub>
    </div>
  );
}

export default App;
