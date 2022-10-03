import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../state/auth'

const Login = () => {
  const navigate = useNavigate()
  
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const [isLoading, setIsLoading] = useState(false)

  const { setUser } = useAuth()

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleFormSubmit = () => {
    setIsLoading(true)

    setTimeout(() => {
      setUser({
        logged: true,
        email: form.email,
      })

      navigate('/')
    }, 3000)
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
          {
            isLoading ? 'Loading...' : 'Login'
          }
        </Button>
      </Box>
    </>
  )
}

export default Login
