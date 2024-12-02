import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './reducer/authReducers.js';
import donationReducer from './reducer/donationReducer.js';

const rootReducer = combineReducers({
    authReducer, donationReducer
});

export default rootReducer;