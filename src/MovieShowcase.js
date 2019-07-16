import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct
    const cards = movieData.map((card) =>
    <MovieCard
      title={card.title}
      IMDBRating={card.IMDBRating}
      genres={card.genres}
      poster={card.poster}
      />)
    return cards

  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
