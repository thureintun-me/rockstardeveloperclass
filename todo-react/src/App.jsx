import { useRef, useState } from "react";
import Item from "./Item";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  List,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import { List as ListIcon, Add as AddIcon } from "@mui/icons-material";
import Header from "./Header";
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
    const id = data.length == 0 ? 1 : data[data.length - 1].id + 1;
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
    <Box>
      <Header count={data.filter((item) => !item.done).length} />
      <Box
        sx={{
          mx: "auto",
          mt: 4,
          maxWidth: "md",
        }}
      >
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
          <OutlinedInput
            fullWidth
            inputRef={inputRef}
            endAdornment={
              <InputAdornment>
                <IconButton type="submit">
                  <AddIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </form>

        <List>
          {data
            .filter((item) => !item.done)
            .map((item) => {
              return (
                <Item
                  item={item}
                  key={item.id}
                  remove={remove}
                  toggle={toggle}
                />
              );
            })}
        </List>

        <hr />

        <List>
          {data
            .filter((item) => item.done)
            .map((item) => {
              return (
                <Item
                  item={item}
                  key={item.id}
                  remove={remove}
                  toggle={toggle}
                />
              );
            })}
        </List>
      </Box>
    </Box>
  );
}

export default App;
