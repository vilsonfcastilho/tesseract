import React from 'react';

import './styles.css';

const MemberItem = ({ member, onClick: memberClickHandler }) => {
  const { avatarUrl, login } = member;
  return (
    <li className="member-item" data-member={login} onClick={memberClickHandler}>
      <header>
        <img src={avatarUrl} alt={login}/>
        <div className="member-info"> 
          <strong>{login}</strong>
        </div>
      </header>
    </li>
  );
}

export default MemberItem;
