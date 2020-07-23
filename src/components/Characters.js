import React from 'react';

const Characters = ({name, birthday, gender, image, charName}) =>
  (
    <div>
      <p>Actor: {name}</p>
      <p>Birthday: {birthday}</p>
      <p>Gender: {gender}</p>
      <p>Character: {charName}</p>
      <img src={image} alt="character"/>
    </div>
  );

export default Characters;
