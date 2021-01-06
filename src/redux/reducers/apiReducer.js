import * as actionTypes from '../actions/actionTypes';
import initialState from '../initialState'

export default function apiReducer(state = initialState.isLoading, action) {
    if (action.type === actionTypes.START_API_CALL) {
        return state + 1;
    }
    else if (action.type === actionTypes.END_API_CALL) {
        return state - 1;
    } else {
        return state;
    }
}