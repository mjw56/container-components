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
          <div>
            <h1 key={i}>{movie.title}</h1>
            <img src={movie.medium_cover_image} />
          </div>
        )}
      </div>
    );
  }
}
