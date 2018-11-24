import React from 'react';
import { Link } from 'react-router-dom';

const FollowList = ({list,label}) =>{
	return(
		<div className="user-info__block">
			<div className="user-info__label user-info__text user-info__text_bold">{label}</div>
			<ul className="followers-list">
				{
					list.map(follower => {
						return(
							<li key={follower.id} className="followers-list__item">
								<Link className="followers-list__user" to={`/users/${follower.login}`}>{follower.login}</Link>
							</li>
						)
					})
				}
			</ul>
		</div>
	)
}

export default FollowList;