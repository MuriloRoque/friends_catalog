import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Seasons from '../components/Seasons';
import fetchApi from '../logic/apiCall';
import Characters from '../components/Characters';

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
  }, []);

  useEffect(() => {
    fetchApi(true).then(data => {
      console.log(data)
      setCast(data);
    })
      .catch(console.log);
  }, []);

  return (
    <div>
      <button>Show Seasons</button>
      <button>Show Characters</button>
      <div>
        {
          seasons.map(season => (
            <Seasons key={season.id} image={season.image.medium} />
          ))
        }
      </div>
      <div>
        {
          cast.map(person => (
            <Characters key={person.person.id} name={person.person.name} birthday={person.person.birthday} gender={person.person.gender} image={person.character.image.medium} charName={person.character.name} />
          ))
        }
      </div>
    </div>
  );
};

export default Lists;
