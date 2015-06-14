import { MOVIES_FETCHED } from '../constants/ActionTypes';

const initialState = []

export default function movies(state = initialState, action) {

  switch (action.type) {

    case MOVIES_FETCHED:
      return [action.data, ...state]

    default:
      return state;

  }
}
