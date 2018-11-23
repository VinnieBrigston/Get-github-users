import React from 'react';
import ListItem from './ListItem';


const ListOfUsers = ({data}) =>{
	return(
		<div className="main">
			<h2 className="main-title">GitHub Users</h2>
			<ul className="users">
			{
				data.map(user => <ListItem key={user.id} user={user} />)
			}
			</ul>
		</div>
	)
}


export default ListOfUsers;
