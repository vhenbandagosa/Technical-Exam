import React,{ useState } from 'react'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { post } from '../../utils/api';

function CreateUsers({refreshData}) {
    
    const [openCreateModal, setOpenCreateModal] = useState(false);

    const handleOpenCreateModal = () => setOpenCreateModal(true);
    const handleCloseCreateModal = () => setOpenCreateModal(false);
    const [user, setUser] = useState({
        lname: '',
        fname: '',
        address: '',
        postcode: '',
        pnumber: '',
        email: '',
        name: '',
        password: '',
        status: 'member', 
        has_agreed:true
    });

    
    const handleUserCreate = async () => {
        post(`/api/users`,user)
        .then(res => {
            refreshData()
            setOpenCreateModal(false)
        })
        .catch(error => console.log(error));
    }
    
    return (
        <>
            <Button 
            onClick={handleOpenCreateModal} 
            style={{marginRight: 20}} 
            variant="contained" 
            size="medium" 
            color="secondary"
            >Add Users</Button>

            <Dialog open={openCreateModal} onClose={handleCloseCreateModal}>
                <DialogTitle>Create user</DialogTitle>
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
                    <Button onClick={handleCloseCreateModal}>Cancel</Button>
                    <Button onClick={handleUserCreate}>Create</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default CreateUsers