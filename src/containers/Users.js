import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers,fetchMoreUsers } from '../actions';
import ListOfUsers from '../components/ListOfUsers';
import Preloader from '../components/Preloader';

class Users extends Component {
	constructor(props){
		super(props);
		this.state={
			allUsers: []
		}
	}

	componentDidMount(){
		const { fetchUsers } = this.props;
		fetchUsers();
	}
	getMoreUsers = () =>{
		const { users,fetchMoreUsers } = this.props;
		const list = users.list!==null ? users.list : null;
		if(list!==null){
			const countOfUsers = list.length;
			const lastInList = list[countOfUsers-1];
			const lastId = lastInList.id;
			fetchMoreUsers(lastId);
		}
	}

	render(){
		const { users } = this.props;
		const listOfUsers = users.list!==null ? users.list : false;
		return(
      <div>
        {
          listOfUsers
          ? <div>
							<ListOfUsers data={listOfUsers} />
							<button 
								className="users__more-handler"
								onClick={this.getMoreUsers}
							>
								Get more!
							</button>
						</div>
          : <Preloader />
				}
      </div>
		)
	}
}

function mapStateToProps(state) {
	return { users: state.users };
}


export default connect(mapStateToProps, { fetchUsers,fetchMoreUsers })(Users);
