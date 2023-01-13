import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { patch, remove } from '../../utils/api';
import UpdateUsers from './update_users';
import DeleteUsers from './delete_users';

function TableAction({userData, refreshData}) {
  const {uid,lname,fname,address,postcode,pnumber,email,name,password} = userData;
  const [user, setUser] = useState({
    uid,lname,fname,address,postcode,pnumber,email,name,password
  });
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleOpenUpdateModal = () => setOpenUpdateModal(true);
  const handleCloseUpdateModal = () => setOpenUpdateModal(false);

  const handleOpenDeleteModal = () => setOpenDeleteModal(true);
  const handleCloseDeleteModal = () => setOpenDeleteModal(false);

  const handleUserUpdate = async () => {
    patch(`/api/users/${user.uid}`,user)
    .then(res => {
      setOpenUpdateModal(false)
      refreshData()
    })
    .catch(error => console.log(error));
  }
  const handleUserDelete = async () => {
    remove(`/api/users/${user.uid}`)
    .then(res => {
      setOpenUpdateModal(false)
      refreshData()
    })
    .catch(error => console.log(error));
  }

  return (
    <>
        <Button 
          onClick={handleOpenUpdateModal} 
          style={{marginRight: 20}} 
          variant="contained" 
          size="small" 
          color="warning"
        >
          Edit
        </Button>
        <Button 
          onClick={handleOpenDeleteModal} 
          variant="contained" 
          size="small" 
          color="error"
        >
          Delete
        </Button>
        <UpdateUsers 
          open={openUpdateModal} 
          user={user}
          setOpen={setOpenUpdateModal}
          setUser={setUser}
          handleClose={handleCloseUpdateModal}
          handleUserUpdate={handleUserUpdate}
        />
        <DeleteUsers
          open={openDeleteModal} 
          user={user}
          setOpen={setOpenDeleteModal}
          setUser={setUser}
          handleClose={handleCloseDeleteModal}
          handleUserDelete={handleUserDelete}
        />
    </>
    
  )
}

export default TableAction