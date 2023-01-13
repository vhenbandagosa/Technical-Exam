import React, { useContext } from 'react';
import { Context } from '../../contexts';

import Login from './login';

export default function SignInForm({ history }) {
	const { stateSignIn, dispatchSignIn, logInAction } = useContext(Context);
	const { email, password, errors, isLoading } = stateSignIn;
	const { handleInput, handleSubmit, handleReset } = logInAction;

	return (
		<Login>
			<div className="FormCenter">
				<form
					className="FormFields"
					onSubmit={e =>
						handleSubmit(e, stateSignIn, dispatchSignIn, history, 'sign-in')
					}
				>
					<div className="FormField">
						<label className="FormField__Label" htmlFor="email">
							E-Mail Address
						</label>
						<input
							type="text"
							id="email"
							className="FormField__Input"
							placeholder="Enter your email"
							name="email"
							value={email}
							onChange={e => handleInput(e, dispatchSignIn)}
						/>
						<br />
						<small style={{ color: 'red' }}>{errors.email}</small>
					</div>

					<div className="FormField">
						<label className="FormField__Label" htmlFor="password">
							Password
						</label>
						<input
							type="password"
							id="password"
							className="FormField__Input"
							placeholder="Enter your password"
							name="password"
							value={password}
							onChange={e => handleInput(e, dispatchSignIn)}
						/>
						<br />
						<small style={{ color: 'red' }}>
							{stateSignIn.errors.password}
						</small>
					</div>

					<div className="FormField">
						<button
							className="FormField__Button mr-20"
							style={{ marginRight: '20px' }}
						>
							{isLoading ? 'Loading ...' : 'Sign In'}
						</button>
					</div>
				</form>
			</div>
		</Login>
	);
}
