import React, { PropTypes } from 'react';

export default class MoviesList {
  static propTypes = {
    fetchMovies: PropTypes.func.isRequired,
    movies: PropTypes.array.isRequired
  };

  componentDidMount() {
    const { fetchMovies } = this.props;

    fetchMovies();
  }

  render() {
    const { movies } = this.props;

    return (
      <div>
        {movies.map((movie, i) =>
          <h1 key={i}>{movie.Title}</h1>
        )}
      </div>
    );
  }
}
