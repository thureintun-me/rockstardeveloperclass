import React, { useEffect, useRef, useState } from "react";

import { Save as SaveIcon, ArrowBack as BackIcon } from "@mui/icons-material";
import {
  Box,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import { Link, json, useNavigate, useParams } from "react-router-dom";

const api = "http://localhost:8080/tasks";

function Edit() {
  const [name, setName] = useState();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async function () {
      const res = await fetch(`${api}/${id}`);
      const item = await res.json();
      setName(item.name);
    })();
  }, []);
  return (
    <Box
      maxWidth={"md"}
      sx={{
        margin: "auto",
        mt: 4,
        p: 4,
        borderRadius: 10,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: lightBlue[100],
      }}
    >
      {/* <Box
        sx={{
          mb: 2,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Link to={"/"}>
          <IconButton sx={{ mr: 2 }}>
            <BackIcon />
          </IconButton>
        </Link>
        <Typography>Edit Page</Typography>
      </Box> */}
      <form
        onSubmit={(e) => {
          e.preventDefault();

          (async function () {
            const res = await fetch(`${api}/${id}`, {
              method: "PUT",
              body: JSON.stringify({
                name,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            });
            console.log("res", res);
          })();

          navigate("/");
        }}
      >
        <OutlinedInput
          fullWidth
          onChange={(e) => setName(e.target.value)}
          value={name}
          endAdornment={
            <InputAdornment position="end">
              <IconButton type="submit">
                <SaveIcon></SaveIcon>
              </IconButton>
            </InputAdornment>
          }
        />
      </form>
    </Box>
  );
}

export default Edit;
