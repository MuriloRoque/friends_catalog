import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Seasons from '../components/Seasons';
import fetchApi from '../logic/apiCall';

const Lists = () => {
  const [change, setChange] = useState(false);
  const [seasons, setSeasons] = useState([]);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchApi(false).then(data => {
      console.log(data)
      setSeasons(data);
    })
      .catch(console.log);
  });

  return (
    <div>
      <button>Show Seasons</button>
      <button>Show Characters</button>
      <div>
        {
          seasons.map(season => (
            <Seasons number={season.number} />
          ))
        }
      </div>
    </div>
  );
};

export default Lists;
