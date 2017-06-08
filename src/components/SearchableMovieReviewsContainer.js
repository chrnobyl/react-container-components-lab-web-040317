// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '5a83a118812c4dc29f59d84c34924258';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=`;




class SearchableMovieReviewsContainer extends Component {
  constructor(){
    super()

    this.state = {
      reviews: [],
      searchTerm: ""
    }

    this.handleSearchInputChange = this.handleSearchInputChange.bind(this)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    fetch(URL.concat(this.state.searchTerm))
    .then(response => response.json())
    .then(response => this.setState({
      reviews: response.results
    }))
  }

  handleSearchInputChange(e){
    console.log(e.target.value)
    this.setState({
      searchTerm: e.target.value
    })

  }

  // componentWillMount(){
  //   fetch(URL)
  //   .then(response => response.json())
  //   .then(movies => this.setState({ reviews: movies.results }))
  // }

  render(){
    return (
      <div className="searchable-movie-reviews">
      <h1> Search for movies </h1>
        <form onSubmit={this.handleSubmit} onChange={this.handleSearchInputChange} >
        <input type="text"/>
        </form>
        < MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
