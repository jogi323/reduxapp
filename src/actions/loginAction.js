import axios from 'axios';
import { SET_CURRENT_USER } from './types';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user:user
  };

}
export function login(data) {
  return dispatch => {
    return axios.post('http://localhost:8080/login', data).then(res => {
      console.log(res.data.user);      
      dispatch(setCurrentUser(res.data.user));
    });
  }
}