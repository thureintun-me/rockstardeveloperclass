import {
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import {
  SquareOutlined as CheckBoxIcon,
  Delete as DeleteIcon,
  CheckBox as DoneIcon,
} from "@mui/icons-material";
export default function Item({ item, remove, toggle }) {
  return (
    <ListItem>
      {item.done ? (
        <IconButton onClick={() => toggle(item._id)}>
          <DoneIcon color="success" />
        </IconButton>
      ) : (
        <IconButton onClick={() => toggle(item._id)}>
          <CheckBoxIcon />
        </IconButton>
      )}
      <ListItemText primary={item.name} />
      <IconButton onClick={() => remove(item._id)}>
        <DeleteIcon color="error" />
      </IconButton>
    </ListItem>
  );
}
