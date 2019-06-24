import * as Immutable from 'immutable';
import constants from '../constants/actions';
import type { Action } from './types';

const { fromJS } = Immutable;

const {
  CHANGE_MENU_ITEM,
  LOGIN_USER,
  SET_CREDENTIALS,
  LOGOUT_USER,
  ADD_SEARCH_TERM,
  DELETE_SEARCH_TERM,
  OPEN_MODAL,
} = constants;
type initialStateType = Immutable.Map<string, *>;

const initialState = fromJS({
  username: '',
  password: '',
  auth: false,
  selectedMenu: 0,
  open: false,
  defaultMessage: "Hello {name}, I would like to add you to my contacts and I would appriciate if you accept this invite.",
  terms: []
});

export default function menuReducer(
  state: initialStateType = initialState,
  action: Action
) {
  switch (action.type) {
    case SET_CREDENTIALS:
      return state.set(action.data.field, action.data.value);
    case LOGIN_USER:
      return state.set('auth',true);
    case LOGOUT_USER:
      return state.set('auth',false);
    case CHANGE_MENU_ITEM:
      return state.set('selectedMenu', action.data);
    case ADD_SEARCH_TERM:
      return state.update("terms", terms => terms.push(action.data));
    case DELETE_SEARCH_TERM:
        return state.update("terms", terms => terms.pop(action.data));
    case OPEN_MODAL:
      return state.update("open", open => !open);
    default:
      return state;
  }
}
