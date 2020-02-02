import React from 'react';

const MemberProfile = ({ profile, onBackButtonClick: backButtonClickHandler }) => {
  const { name } = profile;
  return (
    <>
      <button onClick={backButtonClickHandler}>
        Voltar p/ listagem
      </button>
      <div className="member-item">
        {name}
      </div>
    </>
  );
}

export default MemberProfile;
