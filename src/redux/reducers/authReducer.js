import * as actionTypes from '../actions/actionTypes';
import initialState from '../initialState'

export default function authReducer(state = initialState.user, action) {
    switch (action.type) {
        case actionTypes.CREATE_USER_SUCCESS:
            return { ...state, ...action.user };

        case actionTypes.LOAD_USER_SUCCESS:
            return { ...state, ...action.user };

        case actionTypes.UPDATE_USER_SUCCESS:
            return { ...state, ...action.user };

        case actionTypes.LOGIN_SUCCESS:
            localStorage.setItem('token', action.user.token);
            localStorage.setItem('id', action.user.id);
            const expAt = JSON.stringify((11 * 60 * 60 * 1000) + new Date().getTime());
            localStorage.setItem('expAt', expAt);
            return { ...state, ...action.user };
        default:
            return state;
    }
}