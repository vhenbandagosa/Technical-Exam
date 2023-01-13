import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

function UpdateUsers({open,user,setOpen,setUser,handleClose,handleUserDelete}) {
  return (
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Remove User</DialogTitle>
        <DialogContent>
            Are you sure you want to delete the user named {`${user.fname} ${user.lname}`}?
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleUserDelete}>Delete</Button>
        </DialogActions>
    </Dialog>
  )
}

export default UpdateUsers