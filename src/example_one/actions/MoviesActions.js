import { MOVIES_FETCHED } from '../constants/ActionTypes';
import { magnetURI } from '../utils/api';

export function moviesFetched(data) {
  return {
    type: MOVIES_FETCHED,
    data
  }
}

export function fetchMovies() {
  return dispatch => {
    fetch('https://yts.to/api/v2/list_movies.json')
      .then(r => r.json())
      .then((r) => {

        r.data.movies.map((movie) => {
          movie.magnet = magnetURI(movie.torrents[0].hash, movie.title_long)
        });

        dispatch(moviesFetched(r.data))
      });
  };

}
