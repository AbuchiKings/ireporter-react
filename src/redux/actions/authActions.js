import * as actionTypes from './actionTypes'
import request from '../../util/request'

export function createUser(userData) {
    return { type: actionTypes.CREATE_USER, user: userData.data }
}

export function createUserSuccess(userData) {
    // eslingt-disable-next-line no-unused-vars
    return function (dispatch, getState) {
        return request({ verb: 'post', route: '/auth/signup', payload: userData })
            .then(response => dispatch(createUser(response.data)))
            .catch(error => { throw (error.response.data) });
    }
}