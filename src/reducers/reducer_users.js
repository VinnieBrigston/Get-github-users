import { GET_USERS,GET_MORE_USERS } from '../actions';

const initialState={
	list: null,
	additional: null
}

export default function(state = initialState,action){
	switch (action.type) {
		case GET_USERS:
			return {...state, list : action.users};
		case GET_MORE_USERS:
			return {...state, list : [...state.list,...action.additional]};
		default:
			return state;
	}
}