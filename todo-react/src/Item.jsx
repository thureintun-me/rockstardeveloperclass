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
        <IconButton onClick={() => toggle(item.id)}>
          <DoneIcon color="success" />
        </IconButton>
      ) : (
        <IconButton onClick={() => toggle(item.id)}>
          <CheckBoxIcon />
        </IconButton>
      )}
      <ListItemText primary={item.name} />
      <IconButton onClick={() => remove(item.id)}>
        <DeleteIcon color="error" />
      </IconButton>
    </ListItem>
  );
}
