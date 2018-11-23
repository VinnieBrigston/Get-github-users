import { GET_USER,GET_USER_FOLLOWERS,GET_USER_FOLLOWING } from '../actions';

const initialState={
	user: null,
	followers: null,
	following: null
}
export default function(state = initialState,action){
	switch (action.type) {
    case GET_USER:
			return {...state, user : action.singleUser};
		case GET_USER_FOLLOWERS:
			return {...state, followers : action.followers};
		case GET_USER_FOLLOWING:
			return {...state, following : action.following};
		default:
			return state;
	}
}
