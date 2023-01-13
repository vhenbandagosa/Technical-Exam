import React from 'react';
import Templates from '../templates';
import jwtToken from '../../utils/jwtToken';
import Users from '../users/users';

export default function MainPages() {
	const account = jwtToken();

	return (
		<>
			<Templates account={account}>
				<Users/>
			</Templates>
		</>
	);
}
