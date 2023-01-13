
import { get } from '../../utils/api';
import { initialState } from '../reducers/users_reducer';
import Cookies from 'js-cookie';


export const getUsersData = async (dispatchAccount) => {
	const data = await get('/api/users');
	dispatchAccount({ type: 'GET_USER_SDATA',  payload: data });
};