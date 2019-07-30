import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct
    // if you already have props as an object, and you want to pass it in JSX, you can use ... as a "spread" operator to pass the whole props object
    return movieData.map((data, index) => <MovieCard key={index} {...data} />);

  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
