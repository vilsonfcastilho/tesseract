import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Header.css';
import './Main.css';

import MemberItem from './components/MemberItem';
import MemberForm from './components/MemberForm';

function App() {
  const [members, setMembers] = useState([]);

  async function listButtonClickHandler(e) {
    e.preventDefault();

    const response = await api.get('/orgs/grupotesseract/public_members');
    const membersResponse = response.data.map((member) => ({
      avatarUrl: member.avatar_url,
      login:  member.login,
    }));

    setMembers(membersResponse);
  }

  const searchFormSubmitHandler = () => {
    
  };

  return (
    <div id="app">
      <header>
        <h1>Tesseract Team</h1>
        <img src="https://scontent.fsjp1-1.fna.fbcdn.net/v/t1.0-9/51922900_1126364370865329_2233861564945924096_n.jpg?_nc_cat=107&_nc_ohc=Kv0w0UKCGhEAX9SWfjl&_nc_ht=scontent.fsjp1-1.fna&oh=192bbd6c1142716aae077d2f59867e89&oe=5E8ED301" alt="Tesseract logo"/>
        <button type="submit" onClick={listButtonClickHandler}>Look</button>
      </header>
      <main>
        {members.length > 0 && (
          <>
            <MemberForm onSubmit={searchFormSubmitHandler}/>

            <ul>
              {members.map((member, index) => (
                <MemberItem key={index} member={member} />
              ))}
            </ul>
          </>
        )}
      </main>
    </div>
  );
}

export default App;