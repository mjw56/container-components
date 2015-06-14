import { MOVIES_FETCHED } from '../constants/ActionTypes';

export default function movies(state = [], action) {

  function update(data) {
    return [data, ...state];
  }

  switch (action.type) {

    case MOVIES_FETCHED:
      return update(action.data);

    default:
      return state;

  }
}
