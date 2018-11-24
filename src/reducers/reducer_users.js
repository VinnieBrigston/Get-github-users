import { GET_USERS } from '../actions';

const initialState=[]

export default function(state = initialState,action){
	switch (action.type) {
		case GET_USERS:
			return [...state, ...action.users];
		default:
			return state;
	}
}