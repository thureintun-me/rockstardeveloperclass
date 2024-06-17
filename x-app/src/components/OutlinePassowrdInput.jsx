import { OutlinedInput } from '@mui/material'
import React, { useState } from 'react'
import {Visibility as EyeIcon,VisibilityOffOutlined as EyeSlashIcon} from "@mui/icons-material"
export default function OutlinePassowrdInput() {
    const [isVisible,setIsVisible] = useState(false)
  return (
    <OutlinedInput
          sx={{ mb: 2 }}
          fullWidth
          placeholder="Password"
          type="password"
          endAdornment={
           isVisible ? <EyeIcon /> : <EyeSlashIcon />
          }
        />
  )
}
