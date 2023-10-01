import React, { useState, useEffect } from 'react';

function Counter({ finalNumber }) {
	const [number, setNumber] = useState(2);

	useEffect(() => {
		const timeInterval = 1500; // 2 seconds

		if (number < finalNumber) {
			const timer = setTimeout(() => {
				setNumber(number + 1);
			}, timeInterval / (finalNumber - 2));

			return () => clearTimeout(timer);
		}
	}, [number, finalNumber]);

	return (

		<h1>{number}</h1>
	);
}

export default Counter;
