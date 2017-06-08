// Code MovieReviews Here
import React from 'react'

const Review = ({ display_title, headline, multimedia }) => {
  return (
    <div className="review" name="movie" key={display_title}>
      <h2>{display_title}</h2>
      <p>{headline}</p>
      { multimedia === null ? null : <img src={multimedia.src} /> }
    </div>

)
}

const MovieReviews = ({ reviews }) => {
    return (
    <div className="review-list">
    {
      reviews.map(Review)
    }


    </div>
  )

}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
