import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '5a83a118812c4dc29f59d84c34924258';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here


class LatestMovieReviewsContainer extends Component {
  constructor(){
    super()

    this.state = {
      reviews: []
    }
  }

  componentWillMount(){
    fetch(URL)
    .then(response => response.json())
    .then(movies => this.setState({ reviews: movies.results }))
  }

  render(){
    return (
      <div className="latest-movie-reviews">
      <h1> Latest movies </h1>
        < MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer;
