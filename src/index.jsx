import { createTheme, ThemeProvider } from '@mui/material'
import { deepPurple, indigo } from '@mui/material/colors'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const theme = createTheme({
  palette: {
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: deepPurple[900],
    },
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
