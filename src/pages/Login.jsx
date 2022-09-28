import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleFormSubmit = () => {
    console.log(form)
  }

  return (
    <>
      <Typography variant="h4" sx={{mb: 1}}>
        Restricted Access
      </Typography>
      <Box 
        component="form" 
        sx={{
          display: 'flex',
          gap: '10px',
          flexDirection: 'column',
          maxWidth: 260
        }}
      >
        <TextField
          label="Enter your email"
          name="email"
          type="email"
          onChange={handleInputChange}
        />
        <TextField
          label="Enter your password"
          name="password"
          type="password"
          onChange={handleInputChange}
        />
        <Button color="primary" variant="contained" onClick={handleFormSubmit}>
          Login
        </Button>
      </Box>
    </>
  )
}

export default Login
