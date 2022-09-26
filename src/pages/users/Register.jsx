import { Button, TextField } from '@mui/material'
import axios from 'axios'
import { useState } from 'react'
import Toasty from '../../components/Toasty'

const Register = () => {
  const [form, setForm] = useState({
    firstName: {
      value: '',
      error: false,
    },
    jobPosition: {
      value: '',
      error: false,
    },
  })

  const [openToasty, setOpenToasty] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: {
        value,
      },
    })
  }

  const handleRegisterButton = () => {
    setIsLoading(true)

    let hasError = false

    let newFormState = {
      ...form,
    }

    if (!form.firstName.value) {
      hasError = true

      newFormState.firstName = {
        value: form.firstName.value,
        error: true,
        helperText: 'Please fill in the field correctly',
      }
    }

    if (!form.jobPosition.value) {
      hasError = true

      newFormState.jobPosition = {
        value: form.jobPosition.value,
        error: true,
        helperText: 'Please fill in the field correctly',
      }
    }

    if (hasError) setForm(newFormState)
  
    axios.post('https://reqres.in/api/users', {
      firstName: form.firstName.value,
      jobPosition: form.jobPosition.value,
    }).then(() => {
      setIsLoading(false)
      setOpenToasty(true)
    })
  }

  return (
    <>
      <h2>Add New Users</h2>
      <div>
        <TextField
          error={form.firstName.error}
          helperText={form.firstName.error ? form.firstName.helperText : ''}
          label="Enter your first name"
          variant="standard"
          name="firstName"
          value={form.firstName.value}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <TextField
          error={form.jobPosition.error}
          helperText={form.jobPosition.error ? form.jobPosition.helperText : ''}
          label="Enter your job position"
          variant="standard"
          name="jobPosition"
          value={form.jobPosition.value}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          style={{marginTop: '1rem'}}
          onClick={handleRegisterButton}
          disabled={isLoading}
        >
          {
            isLoading ? 'Loading...' : 'Register'
          }
        </Button>
      </div>
      <Toasty
        open={openToasty}
        severety='success'
        message='Registration completed successfully!'
        onClose={() => setOpenToasty(false)}
      />
    </>
  )
}

export default Register
