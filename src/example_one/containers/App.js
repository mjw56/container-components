import React from 'react';
import MoviesApp from './MoviesApp';
import { createRedux } from 'redux';
import { Provider } from 'redux';
import * as stores from '../stores';

const redux = createRedux(stores);

export default class App {
  render() {
    return (
      <Provider redux={redux}>
        {() =>
          <div>
            <MoviesApp />
          </div>
        }
      </Provider>
    );
  }
}
