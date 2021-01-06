import * as actionTypes from './actionTypes';

export function startApiCall() {
    return { type: actionTypes.START_API_CALL }
}
export function endApiCall() {
    return { type: actionTypes.END_API_CALL }
}