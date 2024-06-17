import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import {
  Comment as CommentIcon,
  FavoriteBorder as FavoriteIcon,
} from "@mui/icons-material";
import { green } from "@mui/material/colors";
export default function PostCard() {
  return (
   
      <Card sx={{marginY:5}}>
        <CardContent>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Avatar sx={{ width: 80, height: 80 }}>U</Avatar>
            <Box sx={{ display:"flex", flexDirection: "column",justifyContent:"center",ml:2 }}>
              <Typography>Some User</Typography>
              <Typography sx={{color:green[500]}}>10 minutes ago</Typography>
            </Box>
          </Box>
          <Box sx={{ mt: 4 }}>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              veritatis veniam, facilis facere sequi, atque, nobis dolorem nulla
              cumque voluptas eveniet assumenda fuga tenetur cum optio unde enim
              laborum placeat! Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Saepe voluptatum recusandae, sapiente natus
              obcaecati laboriosam. Enim perferendis saepe numquam, voluptates,
              pariatur magni esse at expedita, tenetur cumque atque aperiam
              voluptatibus.
            </Typography>
          </Box>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <ButtonGroup>
              <IconButton>
                <FavoriteIcon color="error" />
                <Button variant="text" sx={{ ml: 1 }}>
                  5
                </Button>
              </IconButton>
            </ButtonGroup>
            <ButtonGroup>
              <IconButton>
                <CommentIcon color="success" />
                <Button variant="text" sx={{ ml: 1 }}>
                  10
                </Button>
              </IconButton>
            </ButtonGroup>
          </Box>
        </CardContent>
      </Card>
   
  );
}
