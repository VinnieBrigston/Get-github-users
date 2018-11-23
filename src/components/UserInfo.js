import React from 'react';
import { Link } from 'react-router-dom';
import list from '../images/list.svg'

const UserInfo = ({data,followersList,followingList}) =>{
	const { avatar_url,name,login,created_at, company, email, location, blog, bio } = data;
	return(
		<div className="user-info">
      <Link className="back-button" to="/"><img src={list} className="back-to-list"/></Link>
      <div className="user-info__main">
      <figure className="user-info__photo">
        <img src={avatar_url} className="user-info__img" alt={login} />
      </figure>
      <div className="user-info__about">
        <div className="user-info__label user-info__text">
          <span className="user-info__text_bold user-info__field">Name:</span>
          {name}
        </div>
        <div className="user-info__label user-info__text">
          <span className="user-info__text_bold user-info__field">Login:</span>
          {login}
        </div>
        <div className="user-info__label user-info__text">
          <span className="user-info__text_bold user-info__field">Location:</span>
          {location}
        </div>
        <div className="user-info__label user-info__text">
          <span className="user-info__text_bold user-info__field">Company:</span>
          {company!==null ? company : <span className="not-specified">not specified</span>}
        </div>
        <div className="user-info__label user-info__text">
          <span className="user-info__text_bold user-info__field">Email:</span>
          {email!==null ? email : <span className="not-specified">not specified</span>}
        </div>
        <div className="user-info__label user-info__text">
          <span className="user-info__text_bold user-info__field">Account created at:</span>
          {created_at!==null ? created_at : <span className="not-specified">not specified</span>}
        </div>
        <div className="user-info__label user-info__text">
          <span className="user-info__text_bold user-info__field">Blog:</span>
          {blog!==null ? <a href={blog} target="blank">{blog}</a> : <span className="not-specified">not specified</span>}
        </div>
      </div>
      </div>
      <div className="user-info__additional">

        <div className="user-info__block">
          <div className="user-info__label user-info__text user-info__text_bold">Bio</div>
          <div>{bio!==null ? bio : <span className="not-specified">not specified</span>}</div>
        </div>

        {
          followersList!==null
            ? <div className="user-info__block">
                <div className="user-info__label user-info__text user-info__text_bold">Followers</div>
                <ul className="followers-list">
                  {
                    followersList.map(follower => {
                      return(
                        <li key={follower.id} className="followers-list__item">
                          <Link className="user" to={`/users/${follower.login}`}>{follower.login}</Link>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            : null
        }
        {
          followingList!==null
            ? <div className="user-info__block">
                <div className="user-info__label user-info__text user-info__text_bold">Following</div>
                <ul className="followers-list">
                  {
                    followingList.map(follower => {
                      return(
                        <li key={follower.id} className="followers-list__item">
                          <Link className="user" to={`/users/${follower.login}`}>{follower.login}</Link>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            : null
        }
      </div>

    </div>
	)
}


export default UserInfo;