import React from 'react'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

function UpdateUsers({open,user,setOpen,setUser,handleClose,handleUserUpdate}) {
  return (
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit user</DialogTitle>
        <DialogContent>
        <TextField
            value={user.lname}
            onChange={e => setUser({
            ...user,lname:e.target.value
            })}
            autoFocus
            margin="dense"
            id="lname"
            label="Last Name"
            type="email"
            fullWidth
            variant="standard"
        />
        <TextField
            value={user.fname}
            onChange={e => setUser({
            ...user,fname:e.target.value
            })}
            autoFocus
            margin="dense"
            id="fname"
            label="First Name"
            type="text"
            fullWidth
            variant="standard"
        />
        <TextField
            value={user.address}
            onChange={e => setUser({
            ...user,address:e.target.value
            })}
            autoFocus
            margin="dense"
            id="address"
            label="Address"
            type="text"
            fullWidth
            variant="standard"
        />
        <TextField
            value={user.postcode}
            onChange={e => setUser({
            ...user,postcode:e.target.value
            })}
            autoFocus
            margin="dense"
            id="postcode"
            label="Post Code"
            type="text"
            fullWidth
            variant="standard"
        />
        <TextField
            value={user.pnumber}
            onChange={e => setUser({
            ...user,pnumber:e.target.value
            })}
            autoFocus
            margin="dense"
            id="pnumber"
            label="Contact Number"
            type="number"
            fullWidth
            variant="standard"
        />
        <TextField
            value={user.email}
            onChange={e => setUser({
            ...user,email:e.target.value
            })}
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
        />
        <TextField
            value={user.name}
            onChange={e => setUser({
            ...user,name:e.target.value
            })}
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            type="text"
            fullWidth
            variant="standard"
        />
        <TextField
            value={user.password}
            onChange={e => setUser({
            ...user,password:e.target.value
            })}
            autoFocus
            margin="dense"
            id="pasword"
            label="Password"
            type="text"
            fullWidth
            variant="standard"
        />
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleUserUpdate}>Update</Button>
        </DialogActions>
    </Dialog>
  )
}

export default UpdateUsers