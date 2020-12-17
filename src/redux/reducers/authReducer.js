import * as actionTypes from '../actions/actionTypes';
import initialState from '../initialState'

export default function authReducer(state = initialState.user, action) {
    switch (action.type) {
        case actionTypes.CREATE_USER:
            console.log(action.user)
            return { ...state, ...action.user };
        default:
            return state;
    }
}