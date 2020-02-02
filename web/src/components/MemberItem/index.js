import React from 'react';

import './styles.css';

function MemberItem({ member }) {
  const { avatarUrl, login } = member;
  return (
    <li className="member-item">
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
