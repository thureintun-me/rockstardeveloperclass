import React from "react";
import { Box, Button, OutlinedInput, Typography } from "@mui/material";
import {Visibility as EyeIcon,VisibilityOffOutlined as EyeSlashIcon} from "@mui/icons-material"
export default function Register() {
  return (
    <Box>
      <Typography variant="h3" sx={{ textAlign: "center", mb: 3 }}>
        Register
      </Typography>
      <form>
        <OutlinedInput fullWidth placeholder="Username" sx={{ mb: 2 }} />
        <OutlinedInput fullWidth placeholder="Bio" sx={{ mb: 2 }} />
        <OutlinedInput
          sx={{ mb: 2 }}
          fullWidth
          placeholder="Password"
          type="password"
          endAdornment={
            <EyeIcon />
          }
        />
        <OutlinedInput
          sx={{ mb: 2 }}
          fullWidth
          placeholder="Confirm Password"
          type="password"
        />
        <Button fullWidth variant="contained">
          Register
        </Button>
      </form>
    </Box>
  );
}
