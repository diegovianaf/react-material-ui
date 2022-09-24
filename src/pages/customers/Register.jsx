import { Button, TextField } from '@mui/material'

const Register = () => {
  return (
    <>
      <h2>Add New Customers</h2>
      <div>
        <TextField label="Enter your name" variant="standard" />
      </div>
      <div>
        <TextField label="Enter your position" variant="standard" />
      </div>
      <div>
        <Button variant="contained" color="primary" style={{marginTop: '1rem'}}>
          Register
        </Button>
      </div>
    </>
  )
}

export default Register
