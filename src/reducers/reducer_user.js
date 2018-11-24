import { GET_USER,GET_USER_FOLLOWERS,GET_USER_FOLLOWING } from '../actions';

const initialState={
	data: null,
	followers: [],
	following: []
}
export default function(state = initialState,action){
	switch (action.type) {
    case GET_USER:
			return {...state, data : action.user};
		case GET_USER_FOLLOWERS:
			return {...state, followers : action.payload};
		case GET_USER_FOLLOWING:
			return {...state, following : action.payload};
		default:
			return state;
	}
}
