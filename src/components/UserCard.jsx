import { Avatar, Card, CardActions, CardHeader, IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import ModalConfirm from './ModalConfirm'
import { useState } from 'react'

const UserCard = ({
  id,
  firstName,
  lastName,
  email,
  avatar,
  onDeleteUser,
  onEditUser,
}) => {
  const [openModal, setOpenModal] = useState(false)

  const handleToggleModalConfirm = () => {
    setOpenModal(!openModal)
  }

  const handleConfirmModal = (id) => {
    onDeleteUser(id)
    handleToggleModalConfirm()
  }

  const handleDeleteUser = () => {
    handleToggleModalConfirm()
  }
  
  const handleEditUser = (id) => {
    onEditUser(id)
  }
  
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar aria-label="user" src={avatar} />
          }
          title={`${firstName} ${lastName}`}
          subheader={email}
        />
        <CardActions disableSpacing>
          <IconButton
            aria-label="edit user register"
            onClick={() => handleEditUser(id)}
          >
            <EditIcon />
          </IconButton>
          <IconButton 
            aria-label="delete register"
            onClick={handleDeleteUser}
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
      <ModalConfirm
        open={openModal}
        onClose={handleToggleModalConfirm}
        onConfirm={() => handleConfirmModal(id)}
        title="Are you sure you want to delete it?"
        message="By confirming it is not possible to reverse this action"
      />
    </>
  )
}

export default UserCard
