import { useRef, useState } from "react";
import Item from "./Item";

function App() {
  const inputRef = useRef();
  const [data, setData] = useState([
    {
      id: 1,
      name: "Milk",
      done: true,
    },
    {
      id: 2,
      name: "Bread",
      done: false,
    },
    {
      id: 3,
      name: "Butter",
      done: false,
    },
  ]);

  const add = (name) => {
    const id = data[data.length - 1].id + 1;
    setData([...data, { id: id, name: name, done: false }]);
  };

  const remove = (id) => setData(data.filter((item) => item.id !== id));

  const toggle = (id) => {
    setData(
      data.map((item) => {
        if (item.id == id) {
          item.done = !item.done;
        }
        return item;
      })
    );
  };

  return (
    <div>
      <h1>Todo({data.filter((item) => !item.done).length})</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const name = inputRef.current.value;
          if (name == null) return;

          add(inputRef.current.value);

          inputRef.current.value = "";
          inputRef.current.focus();
        }}
      >
        <input ref={inputRef} />
        <button>Add</button>
      </form>
      <ul>
        {data
          .filter((item) => !item.done)
          .map((item) => {
            return (
              <Item item={item} key={item.id} remove={remove} toggle={toggle} />
            );
          })}
      </ul>
      <hr />

      <ul>
        {data
          .filter((item) => item.done)
          .map((item) => {
            return (
              <Item item={item} key={item.id} remove={remove} toggle={toggle} />
            );
          })}
      </ul>
    </div>
  );
}

export default App;
