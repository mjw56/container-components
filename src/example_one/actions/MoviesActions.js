import { MOVIES_FETCHED } from '../constants/ActionTypes';

export function moviesFetched(data) {
  return {
    type: MOVIES_FETCHED,
    data
  }
}

export function fetchMovies() {
  return dispatch => {
    fetch('http://www.omdbapi.com/?t=the+godfather&y=&plot=short&r=json')
      .then(r => r.json())
      .then((r) => {
        dispatch(moviesFetched(r))
      });
  };

}
