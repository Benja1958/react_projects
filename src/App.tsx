import { useState } from "react";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "London", "Tokyo", "Paris"];
  const [selecteIndex, setSelectedIndex] = useState(-1)

  

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={ selecteIndex === index ? 'list-group-item active' : 'list-group-item'}
            key={item}
            onClick={() => {setSelectedIndex(index);}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
