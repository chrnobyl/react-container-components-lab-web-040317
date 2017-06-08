import React from 'react';
import ReactDOM from 'react-dom';

import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer';

ReactDOM.render(
  <div className="app">
    <div className="column-a"> <SearchableMovieReviewsContainer /> </div>
    <div className="column-b"> <LatestMovieReviewsContainer /> </div>
  </div>,
  document.getElementById('root')
);
