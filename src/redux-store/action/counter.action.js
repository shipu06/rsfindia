import { INCREMENT, DECREMENT } from './../actionType.js';


export const increaseCounter = () => {

	return {

		type: INCREMENT,

	};

};

export const decreaseCounter = () => {

	return {

		type: DECREMENT,

	};

};