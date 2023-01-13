import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableAction from './table_action';
import jwtToken from '../../utils/jwtToken';
import { get } from '../../utils/api';
import CreateUsers from './create_users';

export default function Users() {
	const account = jwtToken();
    const[users,setUsers] = useState([])
    
    useEffect(() =>{
        fetch()
    },[])
    
    fetch = async () => {
        const res = await get('/api/users');
        setUsers(res.data)
    }

  return (
    <>
        {account.user.status === 'admin' && <CreateUsers refreshData={fetch}/>}
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell>Last Name</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Postcode</TableCell>
                <TableCell>Contact Phone Number</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Password</TableCell>
                {account.user.status === 'admin' &&
                    <TableCell>Action</TableCell>
                }
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map(user => 
                    user.status !== 'admin' && 
                    <TableRow key={user.uid}>
                        <TableCell> {user.lname}</TableCell>
                        <TableCell> {user.fname}</TableCell>
                        <TableCell> {user.address}</TableCell>
                        <TableCell> {user.postcode}</TableCell>
                        <TableCell> {user.pnumber}</TableCell>
                        <TableCell> {user.email}</TableCell>
                        <TableCell> {user.name}</TableCell>
                        <TableCell> {user.password}</TableCell>
                        {account.user.status === 'admin' &&
                            <TableCell>
                                <TableAction 
                                    userData={user} 
                                    refreshData={fetch}
                                />
                            </TableCell>
                        }
                        
                    </TableRow>
                )}
            </TableBody>
            </Table>
        </TableContainer>
    </>
  );
}