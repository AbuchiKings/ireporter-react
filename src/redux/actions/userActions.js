import * as actionTypes from './actionTypes';
import request from '../../util/request'
import { startApiCall, endApiCall } from './apiActions';

function loadUserSuccess(userData) {
    return { type: actionTypes.LOAD_USER_SUCCESS, user: { ...userData.data, message: userData.message } }
}

function updateUserSuccess(userData) {
    return { type: actionTypes.UPDATE_USER_SUCCESS, user: { ...userData.data, message: userData.message } }
}


export function loadUser() {
    const id = localStorage.getItem('id');
    if (!id) {
        return;
    }
    return function (dispatch) {
        dispatch(startApiCall)
        return request({ verb: 'get', route: `/users/${id}` })
            .then(response => {
                if (response) {
                    dispatch(endApiCall);
                    return dispatch(loadUserSuccess(response.data))
                }
            })
            .catch(error => { throw (error.response.data) });
    }
}

export function updateUser(userData) {
    const id = localStorage.getItem('id');
    if (!id) {
        return;
    }
    return function (dispatch) {
        return request({ verb: 'patch', route: `/users/${id}/update-user`, payload: userData })
            .then(response => { if (response) return dispatch(updateUserSuccess(response.data)) })
            .catch(error => { throw (error.response.data) });
    }
}