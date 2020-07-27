import React from 'react';
import PropTypes from 'prop-types';
import episode from '../styles/EpisodeItem.module.css';

const EpisodeItem = ({ location }) => {
  const {
    name, airdate, runtime, image, summary,
  } = location.state;
  return (
    <div className={episode.details}>
      <div>
        <p>Title</p>
        <p>Airdate</p>
        <p>Runtime (min)</p>
      </div>
      <div>
        <p>{name}</p>
        <p>{airdate}</p>
        <p>{runtime}</p>
      </div>
      <img src={image} alt={name} />
      <p>
        Summary:
        {summary.slice(3, -4)}
      </p>
    </div>
  );
};

EpisodeItem.propTypes = {
  location: PropTypes.string.isRequired,
};

export default EpisodeItem;
