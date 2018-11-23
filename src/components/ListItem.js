import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({user}) => {
	return(
		<Link className="user" to={`/users/${user.login}`}>
			<li className="user__wrap">
				<div className="user__photo">
					<img src={user.avatar_url} alt={user.login} className="user__img" />
				</div>
				<div className="user__about">
					<span className="user__login">{user.login}</span>
					<span className="user__link">{user.html_url}</span>
				</div>
			</li>
		</Link>
	)
}

export default ListItem;