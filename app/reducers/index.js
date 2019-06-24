// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import menuReducer from './menuReducer';

export default function createRootReducer(history: History) {
  return combineReducers<{}, *>({
    router: connectRouter(history),
    menu: menuReducer,
  });
}
