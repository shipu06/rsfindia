import { Stack, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

function Counter({ key, finalNumber, text }) {
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
		<Stack alignItems={'center'} key={key}>
			<Text fontSize={'2.5rem'} fontWeight={800} letterSpacing={'3px'} color={'red.400'}>{number}+</Text>
			<Text fontSize={'1rem'}>{text}</Text>
		</Stack>
	);
}

export default Counter;
