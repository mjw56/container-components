import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux';
import MoviesList from '../components/MoviesList';
import * as MoviesActions from '../actions/MoviesActions';

@connect(state => ({
  movies: state.movies
}))
export default class MoviesApp {
  render() {
    const { movies, dispatch } = this.props;

    return (
      <MoviesList movies={movies}
               {...bindActionCreators(MoviesActions, dispatch)} />
    );
  }
}
