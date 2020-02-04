import React from 'react';

import './styles.css';

const MemberProfile = ({ profile, onClick: memberClickHandler }) => {
  const { avatar_url, login, name, public_repos: publicRepos, followers, created_at: createdAt } = profile;
  return (
    <div className="member-item" data-member={login} onClick={memberClickHandler}>
      <header>
        <img src={avatar_url} alt={login}/>
        <div className="member"> 
          <strong>{login}</strong>
          <ul className="member-info">
            <li><span><b>Name :</b> {name}</span></li>
            <li><span><b>Repositories :</b> {publicRepos}</span></li>
            <li><span><b>Followers :</b> {followers}</span></li>
            <li><span><b>Created at :</b> {createdAt}</span></li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default MemberProfile;






        