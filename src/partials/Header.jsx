import { useState } from 'react'

import { 
  AppBar,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from '@mui/material'

import { useNavigate } from 'react-router-dom'

import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const Header = ({ user }) => {
  const navigate = useNavigate()

  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleMenuClick = (route) => {
    navigate(route)
    handleToggleMenu()
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => handleToggleMenu()}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React - Material UI
          </Typography>
          {
            user.logged
              ? user.email
              : <Button color="inherit">Login</Button>
          }
        </Toolbar>
      </AppBar>
      <Drawer open={menuOpen} onClose={() => handleToggleMenu()}>
        <List>
          <ListItem button onClick={() => handleMenuClick('/')}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>
              Home
            </ListItemText>
          </ListItem>
          <ListItem button onClick={() => handleMenuClick('/users')}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText>
              Users List
            </ListItemText>
          </ListItem>
          <ListItem button onClick={() => handleMenuClick('/users/add')}>
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText>
              Add New Users
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}

export default Header
