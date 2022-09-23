import { Avatar, Card, CardActions, CardHeader, IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import ModalConfirm from './ModalConfirm'
import { useState } from 'react'

const CustomerCard = ({
  firstName,
  lastName,
  email,
  avatar,
}) => {
  const [openModal, setOpenModal] = useState(false)

  const handleToggleModalConfirm = () => {
    setOpenModal(!openModal)
  }

  const handleConfirmModal = () => {
    alert('ok')
  }

  const handleDeleteCustomer = () => {
    handleToggleModalConfirm()
  }

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar aria-label="customer" src={avatar}>
              R
            </Avatar>
          }
          title={`${firstName} ${lastName}`}
          subheader={email}
        />
        <CardActions disableSpacing>
          <IconButton aria-label="edit user register">
            <EditIcon />
          </IconButton>
          <IconButton 
            aria-label="delete register"
            onClick={handleDeleteCustomer}
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
      <ModalConfirm
        open={openModal}
        onClose={handleToggleModalConfirm}
        onConfirm={handleConfirmModal}
        title="Are you sure you want to delete it?"
        message="By confirming it is not possible to reverse this action"
      />
    </>
  )
}

export default CustomerCard
