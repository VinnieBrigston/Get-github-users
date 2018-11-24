import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser,fetchContent,GET_USER_FOLLOWERS,GET_USER_FOLLOWING } from '../actions';
import UserInfo from '../components/UserInfo';
import Preloader from '../components/Preloader';

class User extends Component {

	componentDidMount(){
		const userName = this.props.match.params.name;
		const { fetchUser } = this.props;
		fetchUser(userName,[this.fetchFollowers,this.fetchFollowing]);
	}
	componentWillReceiveProps(nextProps){
		const { fetchUser, match } = this.props;
		const nextName = nextProps.match.params.name;
		if (nextName !== match.params.name) {
			fetchUser(nextName, [this.fetchFollowers,this.fetchFollowing]);
		}
	}
	fetchFollowers = (data) =>{
		const { fetchContent } = this.props;
		const { followers_url } = data;
		fetchContent(followers_url,GET_USER_FOLLOWERS);
	}
	fetchFollowing = (data) =>{
		const { fetchContent } = this.props;
		const { following_url } = data;
		const cleanUrl = following_url.replace(/\{.*$/,"")
		fetchContent(cleanUrl,GET_USER_FOLLOWING);
	}

	render() {
		const { user } = this.props;
		const data = user ? user.data : false;
		const followersList = user ? user.followers : null;
		const followingList = user ? user.following : null;
		return (
			<div>
				{
					data
					? <UserInfo 
							data={data} 
							followersList={followersList} 
							followingList={followingList}
						/>
					: <Preloader />
				}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { user: state.user };
}


export default connect(mapStateToProps, { fetchUser,fetchContent })(User);