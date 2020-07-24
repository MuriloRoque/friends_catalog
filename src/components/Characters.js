import React from 'react';
import PropTypes from 'prop-types';

const Characters = ({
  name, birthday, gender, image, charName,
}) => (
  <div>
    <p>
      Actor:
      {name}
    </p>
    <p>
      Birthday:
      {birthday}
    </p>
    <p>
      Gender:
      {gender}
    </p>
    <p>
      Character:
      {charName}
    </p>
    <img src={image} alt="character" />
  </div>
);

Characters.propTypes = {
  name: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  charName: PropTypes.string.isRequired,
};

export default Characters;
