import React, { useState } from 'react';
import Cookies from 'js-cookie';

import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	IconButton
} from '@material-ui/core';

export default function NavBar({ user, classes }) {
	const [isLoading, setIsLoading] = useState(false);

	return (
		<AppBar position="fixed" className={classes.appBar}>
			<Toolbar>
				<Typography variant="h6" noWrap className={classes.title}>
					Hello {user.name}!
				</Typography>
				<Button
					color="inherit"
					onClick={() => {
						Cookies.remove('token');
						setIsLoading(true);
						setTimeout(() => {
							window.location.reload(true);
						}, 1000);
					}}
				>
					{isLoading ? 'Loading...' : 'Logout'}
				</Button>
			</Toolbar>
		</AppBar>
	);
}
