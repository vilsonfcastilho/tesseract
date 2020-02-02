import React, { useState } from 'react';

import './styles.css';

const MemberForm = React.memo(({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const searchFormSubmitHandler = (e) => {
    e.preventDefault();

    if(inputValue !== '' && inputValue !== null) {
      onSubmit(inputValue);
    }
  }

  const searchInputChangeHandler = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <form onSubmit={searchFormSubmitHandler}>
      <label htmlFor="search_login">Search by login: </label>
      <input
        type="text"
        name="search_login"
        id ="login"
        onChange={searchInputChangeHandler}
        value={inputValue}
      />
      <button type="submit">Find</button>
    </form>
  );
});

export default MemberForm;