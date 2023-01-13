export const initialState = [];

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_USERS': {
			return [...state, action.payload];
		}
		case 'GET_USER_SDATA': {
			return action.payload;
		}
		default:
			return state;
	}
};
