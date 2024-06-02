import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import {
  List as ListIcon,
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
  ArrowBack as BackIcon,
  ArrowBack,
} from "@mui/icons-material";
import { useContext } from "react";
import { AppContext } from "./ThemedApp";
import { Link, useLocation } from "react-router-dom";
const Header = ({ count }) => {
  const { mode, setMode } = useContext(AppContext);
  const { pathname } = useLocation();
  return (
    <AppBar position="static">
      <Toolbar>
        {pathname == "/" ? (
          <ListIcon />
        ) : (
          <Link>
            <IconButton>
              <BackIcon />
            </IconButton>
          </Link>
        )}

        {/* <Badge sx={{ mr: 2 }} badgeContent={count} color="error">
          // <ListIcon />
          //{" "}
        </Badge> */}
        <Typography
          sx={{
            ml: 2,
            flexGrow: 1,
          }}
        >
          Todo
        </Typography>
        {mode === "dark" ? (
          <IconButton
            onClick={() => {
              setMode("light");
            }}
          >
            <LightModeIcon />
          </IconButton>
        ) : (
          <IconButton
            onClick={() => {
              setMode("dark");
            }}
          >
            <DarkModeIcon />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
