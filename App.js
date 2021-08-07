import { useState } from "react";
import "./App.css";
import Todolists from "./Todolists";

function App() {
  const [inputList, setInputList] = useState();
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oliditems) => {
      return [...oliditems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    setItems((oliditems) => {
      return oliditems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="App">
      <div className="center">
        <br />
        <h1>TODO List</h1>
        <br />
        <input
          type="text"
          placeholder="Add a Items"
          onChange={itemEvent}
          value={inputList}
        />
        <button onClick={listOfItems}> + </button>

        <ol>
          {/* <li> {inputList} </li> */}

          {items.map((itemval, index) => {
            return (
              <Todolists
                text={itemval}
                key={index}
                id={index}
                onSelect={deleteItems}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
