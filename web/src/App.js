import React, { useState } from 'react';

import './global.css';
import './App.css';
import './Header.css';
import './Main.css';

function App() {
  const [ avatarMember, setAvatarMember ] = useState('');
  const [ listMembers, setListMembers ] = useState('');
  
  const [ memberLogin, setMemberLogin] = useState('');
  const [ members, setMembers ] = useState('');

  async function handledListDev(e) {
    e.preventDefault();


  }

  return (
    <div id="app">
      <header>
        <h1>Tesseract Team</h1>
        <img src="https://scontent.fsjp1-1.fna.fbcdn.net/v/t1.0-9/51922900_1126364370865329_2233861564945924096_n.jpg?_nc_cat=107&_nc_ohc=Kv0w0UKCGhEAX9SWfjl&_nc_ht=scontent.fsjp1-1.fna&oh=192bbd6c1142716aae077d2f59867e89&oe=5E8ED301" alt="Tesseract logo"/>
        <button type="submit" onSubmit={handledListDev}>Look</button>
      </header>
      <main>
        <form action="">
          <label htmlFor="search_login">Search by login: </label>
          <input
            type="text"
            name="search_login"
            id ="login"
            value={memberLogin}
            onChange={e => setMemberLogin(e.target.value)}
          />
          <button type="submit">Find</button>
        </form>

        <ul>
          <li className="member-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/16003265?s=460&v=4" alt="Member Avatar"/>
              <div className="member-info"> 
                <strong>Member Login</strong>
                <span>Member Name</span>
              </div>
            </header>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;