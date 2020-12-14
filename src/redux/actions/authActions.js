import * as actionTypes from './actionTypes'

export function createUser(userData) {
    return { type: actionTypes.CREATE_USER, user: userData }
}