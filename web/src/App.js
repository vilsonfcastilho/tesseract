import React, { useState } from 'react';

import './global.css';
import './App.css';
import './Header.css';
import './Main.css';

function App() {
  // const [ members, setMembers ] = useState([]);

  // function listMenbers() {
  //   setMembers(members[]);
  // }

  return (
    <div id="app">
      <header>
        <h1>Tesseract Team</h1>
        <img src="https://scontent.fsjp1-1.fna.fbcdn.net/v/t1.0-9/51922900_1126364370865329_2233861564945924096_n.jpg?_nc_cat=107&_nc_ohc=Kv0w0UKCGhEAX9SWfjl&_nc_ht=scontent.fsjp1-1.fna&oh=192bbd6c1142716aae077d2f59867e89&oe=5E8ED301" alt="Tesseract logo"/>
        <button type="submit">Look</button>
      </header>
      <main>
        <label htmlFor="">Searcn by login: </label>
        <input type="text"/>
        <button type="submit">Find</button>

        <ul>
          <li className="member-item">
            <header>
              <img src="" alt=""/>
            </header>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;