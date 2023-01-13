import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import {
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Avatar,
	capitalize
} from '@material-ui/core';

import CalculateIcon from '@mui/icons-material/Calculate';
import PeopleIcon from '@mui/icons-material/People';

export default function SideBar({ user, open, classes }) {
	return (
		<Drawer
			variant="permanent"
			className={clsx(classes.drawer, {
				[classes.drawerOpen]: open,
				[classes.drawerClose]: !open
			})}
			classes={{
				paper: clsx({
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open
				})
			}}
		>
			<List>
				<ListItem>
					<ListItemIcon>
						<Avatar
							alt={capitalize(user.name)}
							src="https://files.slack.com/files-pri/T0QG5E3SL-FUP1WGQ0Z/screenshot_from_2020-03-06_09-30-11.png"
						/>
					</ListItemIcon>
					<ListItemText>
						<b>{user.name}</b>
					</ListItemText>
				</ListItem>
				<Link to="/main-page">
					<ListItem button >
						<ListItemIcon>
							<PeopleIcon /> 
						</ListItemIcon>
					</ListItem>
				</Link>
				<Link to="/calculator">
					<ListItem button >
						<ListItemIcon>
							<CalculateIcon /> 
						</ListItemIcon>
					</ListItem>
				</Link>
			</List>
		</Drawer>
	);
}
