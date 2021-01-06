import * as actionTypes from './actionTypes';
import request from '../../util/request'

 function loadUserSuccess(userData) {
    return { type: actionTypes.LOAD_USER_SUCCESS, user: { ...userData.data, message: userData.message } }
}



export function loadUser() {
    const id = localStorage.getItem('id');
    if (!id) {
        return;
    }
    return function (dispatch) {
        return request({ verb: 'get', route: `/users/${id}` })
            .then(response => {if(response) return dispatch(loadUserSuccess(response.data))})
            .catch(error => { throw (error.response.data) });
    }
}