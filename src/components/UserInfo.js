import React from 'react';
import { Link } from 'react-router-dom';
import list from '../images/list.svg';
import FollowList from './FollowList';


function renderUserDetails(fieldMapping){
	return fieldMapping.map(field => (
		<div key={field.label} className="user-info__label user-info__text">
			<span className="user-info__text_bold user-info__field">{field.label}:</span>
			{ field.value || <span className="not-specified">not specified</span> }
		</div>
	))
}

const UserInfo = ({data,followersList,followingList}) =>{
	const { avatar_url,name,login,created_at, company, email, location, blog, bio } = data;
	const sameDetails = [
		{label: 'Name', value:name},
		{label: 'Login', value:login},
		{label: 'Location', value:location},
		{label: 'Company', value:company},
		{label: 'Email', value:email},
		{label: 'Account created at', value:created_at},
	]
	return(
		<div className="user-info">
			<Link className="back-button" to="/"><img src={list} className="back-to-list" alt="list icon"/></Link>
			<div className="user-info__main">
			<figure className="user-info__photo">
				<img src={avatar_url} className="user-info__img" alt={login} />
			</figure>
			<div className="user-info__about">
				{
					renderUserDetails(sameDetails)
				}
				<div className="user-info__label user-info__text">
					<span className="user-info__text_bold user-info__field">Blog:</span>
					{blog ? <a href={blog} target="blank">{blog}</a> : <span className="not-specified">not specified</span>}
				</div>
			</div>
			</div>
			<div className="user-info__additional">
				<div className="user-info__block user-info__text">
					<div className="user-info__label user-info__text user-info__text_bold">Bio</div>
					<div>{bio || <span className="not-specified">not specified</span>}</div>
				</div>
				{
					followersList!==null
						? <FollowList list={followersList} label={'Followers'} />
						: null
				}
				{
					followingList!==null
						? <FollowList list={followingList} label={'Following'} />
						: null
				}
			</div>
		</div>
	)
}


export default UserInfo;