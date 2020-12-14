import * as actionTypes from '../actions/actionTypes'

export default function authReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.CREATE_USER:
            return { ...state, ...action.user };
        default:
            return state;
    }
}