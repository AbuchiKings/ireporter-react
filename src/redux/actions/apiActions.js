import * as actionTypes from './actionTypes';

export function startApiCall() {
    return { type: actionTypes.START_API_CALL }
}
export function endApiCall() {
    console.log("called")
    return { type: actionTypes.END_API_CALL }
}