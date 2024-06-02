import { useEffect, useRef, useState } from "react";
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
  Alert,
} from "@mui/material";
import { List as ListIcon, Add as AddIcon } from "@mui/icons-material";
import Header from "./Header";

const api = "http://localhost:8080/tasks";
function App() {
  const inputRef = useRef();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const add = async (name) => {
    const res = await fetch(api, {
      method: "POST",
      body: JSON.stringify({ name }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const item = await res.json();
    setData([...data, item]);
  };

  const remove = async (_id) => {
    setData(data.filter((item) => item._id !== _id));
    const res = await fetch(`${api}/${_id}`, {
      method: "DELETE",
    });
  };

  const toggle = (_id) => {
    setData(
      data.map((item) => {
        if (item._id == _id) {
          item.done = !item.done;
        }
        return item;
      })
    );
    fetch(`${api}/${_id}/toggle`, {
      method: "PUT",
    });
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(api);
        if (response.ok) {
          setData(await response.json());
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setHasError(true);
        }
      } catch (error) {
        setIsLoading(false);
        setHasError(true);
      }
    })();
  }, []);

  return (
    <Box>
      <Box
        sx={{
          mx: "auto",
          mt: 4,
          maxWidth: "md",
        }}
      >
        {isLoading && <Box sx={{ mb: 2, textAlign: "center" }}>Loading...</Box>}
        {hasError && <Alert severity="error">Something went wrong</Alert>}
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
              <InputAdornment position="end">
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
                  key={item._id}
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
                  key={item._id}
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
