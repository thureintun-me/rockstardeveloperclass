import { Box, Button, OutlinedInput, Typography } from "@mui/material";
import React from "react";

export default function Login() {
  return (
    <Box>
      <Typography variant="h3" sx={{ textAlign: "center",mb:3 }}>
        Login
      </Typography>
      <form>
        <OutlinedInput fullWidth placeholder="Username" sx={{mb:2}} />
        <OutlinedInput sx={{mb:2}} fullWidth placeholder="Password" type="password" />
        <Button fullWidth variant="contained">
            Login
        </Button>
      </form>
    </Box>
  );
}
