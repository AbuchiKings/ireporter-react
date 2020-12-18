import * as actionTypes from './actionTypes'
import request from '../../util/request'

export function createUser(userData) {
    return { type: actionTypes.CREATE_USER_SUCCESS, user: { ...userData.data, message: userData.message } }
}
export function loginUser(userData) {
    console.log(userData)

    return {
        type: actionTypes.LOGIN_SUCCESS,
        user: { ...userData.data, message: userData.message, isLoggedIn: true }
    }
}

export function createUserSuccess(userData) {
    // eslingt-disable-next-line no-unused-vars
    return function (dispatch, getState) {
        return request({ verb: 'post', route: '/auth/signup', payload: userData })
            .then(response => dispatch(createUser(response.data)))
            .catch(error => { throw (error.response.data) });
    }
}
export function loginSuccess(userData) {
    return function (dispatch) {
        return request({ verb: 'post', route: '/auth/login', payload: userData })
            .then(response => dispatch(loginUser(response.data)))
            .catch(error => { throw (error.response.data) });
    }
}