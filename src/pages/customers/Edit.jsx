import { Button, TextField } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Toasty from '../../components/Toasty'

const Edit = () => {
  const { id } = useParams()

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

  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`)
      .then((response) => {
        const { data } = response.data

        setForm({
          firstName: {
            value: data.first_name,
            error: false,
          },
          jobPosition: {
            value: data.job,
            error: false,
          },
        })
      })
  }, [])

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
  
    axios.put(`https://reqres.in/api/users/${id}`, {
      firstName: form.firstName.value,
      jobPosition: form.jobPosition.value,
    }).then(() => {
      setIsLoading(false)
      setOpenToasty(true)
    })
  }

  return (
    <>
      <h2>Edit Customer</h2>
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
            isLoading ? 'Loading...' : 'Save'
          }
        </Button>
      </div>
      <Toasty
        open={openToasty}
        severety='success'
        message='Registration updated successfully!'
        onClose={() => setOpenToasty(false)}
      />
    </>
  )
}

export default Edit
