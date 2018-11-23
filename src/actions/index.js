import axios from 'axios';

export const GET_USERS = 'get_users';
export const GET_MORE_USERS = 'get_more_users';
export const GET_USER = 'get_user';
export const GET_USER_FOLLOWERS = 'get_user_followers';
export const GET_USER_FOLLOWING = 'get_user_following';
const API_URL = 'https://api.github.com/users';

export function fetchUsers() {
	return (dispatch) => {
		axios.get(API_URL)
		.then((res) =>{
			dispatch({type: GET_USERS,users: res.data})
		})
	}
}

export function fetchMoreUsers(lastId) {
	return (dispatch) => {
		axios.get(API_URL,{
			params:{
				per_page: 30,
				since: lastId
			}
		})
		.then((res) =>{
			dispatch({type: GET_MORE_USERS,additional: res.data})
		})
	}
}

export function fetchUser(userName,callbackArray) {
	return (dispatch) => {
		axios.get(`${API_URL}/${userName}`)
			.then((res) =>{
				dispatch({type: GET_USER,singleUser: res.data})
				if(Array.isArray(callbackArray)){
					callbackArray.length && callbackArray.forEach(item =>{
						if(typeof item === 'function'){
							item(res.data)
						}
					})
				}
			})
	}
}

export function fetchFollowers(url) {
	return (dispatch) => {
		axios.get(url)
			.then((res) =>{
				dispatch({type: GET_USER_FOLLOWERS,followers: res.data})
			})
	}
}

export function fetchFollowing(url) {
	return (dispatch) => {
		axios.get(url)
			.then((res) =>{
				dispatch({type: GET_USER_FOLLOWING,following: res.data})
			})
	}
}