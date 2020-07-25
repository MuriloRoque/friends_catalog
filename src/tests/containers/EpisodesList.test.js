import React from 'react';
import { render, screen } from '../test-utils';
import EpisodesList from '../../containers/EpisodesList';
import fetchApi from '../../logic/apiCall';

test('Renders the connected list with initialState', () => {
  fetchApi().then(data => {
    render(<EpisodesList />, data);
    expect(screen.getByText(/The One Where Monica Gets a Roommate/i)).toBeInTheDocument();
  }).catch(() => {

  });
});
