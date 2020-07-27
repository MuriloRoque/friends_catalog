import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../containers/Header';
import EpisodesList from '../containers/EpisodesList';
import EpisodeItem from './EpisodeItem';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={Header} />
      <Route exact path="/" component={EpisodesList} />
      <Route exact path="/episode/:id" component={EpisodeItem} />
    </div>
  </BrowserRouter>
);

export default App;
