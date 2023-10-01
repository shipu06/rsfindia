import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer/rootReducer';

// Create the store
const store = configureStore({
	reducer: rootReducer, // Pass in your root reducer here
	// You can also configure other options like middleware, devTools, etc.
});

export default store;