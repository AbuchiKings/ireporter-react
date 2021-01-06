import { combineReducers } from 'redux';
import authReducer from './authReducer';
import isLoading from './apiReducer'

const rootReducer = combineReducers({
    user: authReducer,
    isLoading
})
 

export default rootReducer;