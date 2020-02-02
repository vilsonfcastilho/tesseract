import React from 'react';

import './styles.css';

function MemberForm({ searchFormSubmitHandler }) {
  return (
    <form onSubmit={searchFormSubmitHandler}>
      <label htmlFor="search_login">Search by login: </label>
      <input
        type="text"
        name="search_login"
        id ="login"
      />
      <button type="submit">Find</button>
    </form>
  );
}

export default MemberForm;