import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Seasons from '../components/Seasons';
import fetchApi from '../logic/apiCall';
import Characters from '../components/Characters';

const Lists = () => {
  const [change, setChange] = useState('seasons');
  const [seasons, setSeasons] = useState([]);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchApi('seasons').then(data => {
      console.log(data)
      setSeasons(data);
    })
      .catch(console.log);
  }, []);

  useEffect(() => {
    fetchApi('cast').then(data => {
      console.log(data)
      setCast(data);
    })
      .catch(console.log);
  }, []);

  const changeSeasons = useCallback(() => {
    setChange('seasons')
  }, [])

  const changeCast = useCallback(() => {
    setChange('cast')
  }, [])

  return (
    <div>
      <button onClick={changeSeasons}>Show Seasons</button>
      <button onClick={changeCast}>Show Characters</button>
      <div>
        { change === 'seasons' ?
          seasons.map(season => (
            <Seasons key={season.id} image={season.image.medium} />
          )) :           cast.map(person => (
            <Characters key={person.person.id} name={person.person.name} birthday={person.person.birthday} gender={person.person.gender} image={person.character.image.medium} charName={person.character.name} />
          ))
        }
      </div>
    </div>
  );
};

export default Lists;
