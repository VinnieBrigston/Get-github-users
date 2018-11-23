import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser,fetchFollowers,fetchFollowing } from '../actions';
import UserInfo from '../components/UserInfo';
import Preloader from '../components/Preloader';

class User extends Component {
  constructor(props){
    super(props);
    this.state={
      currentUserName: ""
    }
  }

  componentDidMount(){
    const userName = this.props.match.params.name;
    const { fetchUser } = this.props;
    this.setState({
      currentUserName: userName
    })
    fetchUser(userName,[this.fetchFollowers,this.fetchFollowing]);
  }
  componentWillReceiveProps(nextProps){
    const { fetchUser } = this.props;
    if(nextProps.match.params.name!==this.state.currentUserName){
      const newName = nextProps.match.params.name;
      this.setState({
        currentUserName: newName
      })
      fetchUser(newName,[this.fetchFollowers,this.fetchFollowing]);
    }
  }
  fetchFollowers = (data) =>{
    const { fetchFollowers } = this.props;
    const { followers_url } = data;
    fetchFollowers(followers_url);
	}
	fetchFollowing = (data) =>{
		const { fetchFollowing } = this.props;
		const { following_url } = data;
		const cleanUrl = following_url.replace(/\{.*$/,"")
    fetchFollowing(cleanUrl);
	}

  render(){
    const { singleUser } = this.props;
    const data = singleUser ? singleUser.user : false;
    const followersList = singleUser ? singleUser.followers : null;
    const followingList = singleUser ? singleUser.following : null;
    return(
      <div>
        {
          data
          ? <UserInfo data={data} followersList={followersList} followingList={followingList}/>
          : <Preloader />
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
	return { singleUser: state.singleUser };
}


export default connect(mapStateToProps, { fetchUser,fetchFollowers,fetchFollowing })(User);