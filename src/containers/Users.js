import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import ListOfUsers from '../components/ListOfUsers';
import Preloader from '../components/Preloader';

class Users extends Component {
	componentDidMount(){
		const { fetchUsers } = this.props;
		fetchUsers();
	}
	getMoreUsers = () =>{
		const { users,fetchUsers } = this.props;
		if(users.length){
			const lastId = users[users.length - 1].id;
			fetchUsers(lastId);
		}
	}

	render(){
		const { users } = this.props;
		return(
			<div>
				{
					users.length
					? <div>
							<ListOfUsers data={users} />
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


export default connect(mapStateToProps, { fetchUsers })(Users);
