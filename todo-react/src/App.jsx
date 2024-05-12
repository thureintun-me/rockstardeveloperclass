import { useState } from "react";
import Item from "./Item";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Milk",
      price: 0.99,
    },
    {
      id: 2,
      name: "Bread",
      price: 1.99,
    },
    {
      id: 1,
      name: "Butter",
      price: 2.99,
    },
  ]);

  const add = () => {
    setData([...data, { id: 4, name: "Orange", price: 4.99 }]);
  };
  return (
    <div>
      <h1>Todo</h1>
      <ul>
        {data.map((item) => {
          return <Item item={item} key={item.id} />;
        })}
      </ul>
      <button onClick={add}>Add</button>
    </div>
  );
}

export default App;
