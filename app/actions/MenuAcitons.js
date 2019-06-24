//@flow
import constants from '../constants/actions';

const {
  CHANGE_MENU_ITEM,
  LOGIN_USER,
  SET_CREDENTIALS,
  LOGOUT_USER,
  ADD_SEARCH_TERM ,
  DELETE_SEARCH_TERM,
  OPEN_MODAL
} = constants;

export function loginUser(data: Object) {
  return {
    type: LOGIN_USER,
    data
  };
}

export function logoutUser(){
  return {
    type: LOGOUT_USER
  }
}

export function setCredentials(field: String, value: String) {
  return {
    type: SET_CREDENTIALS,
    data: {
      field,
      value
    }
  };
}

export function changeMenu(selectedMenu: number) {
  return {
    type: CHANGE_MENU_ITEM,
    data: selectedMenu
  };
}

export function addSearchTerm(term: string){
  return {
    type: ADD_SEARCH_TERM,
    data: term
  }
}

export function deleteSearchTerm(index: number){
  return {
    type: DELETE_SEARCH_TERM,
    data: index
  }
}

export function openModal(){
  return {
    type: OPEN_MODAL
  }
}
