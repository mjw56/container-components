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
        {movies.map((movie) =>
          <h1>{movie.Title}</h1>
        )}
      </div>
    );
  }
}
