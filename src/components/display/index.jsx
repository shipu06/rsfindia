import { Container, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import Counter from '../counter';

const DisplayBar = () => {
	const bgColor = useColorModeValue('gray.100', 'gray.800');
	const data = [
		{
			count: 10,
			text: 'Child Education Adopted'
		},
		{
			count: 450,
			text: 'Food Packets Served'
		},
		{
			count: 100,
			text: 'Tree Planted and Protected'
		},
		{
			count: 8,
			text: 'Social Awareness Campaign'
		},

	]
	return (
		<Container maxW={'100vw'} bg={bgColor} h="20vh" justifyContent={'center'} display={'flex'} >
			<Stack display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-around'} w={'8xl'}>
				{
					data.map((item, index) => (
						<Counter key={index} finalNumber={item.count} text={item.text} />
					))
				}
			</Stack>
		</Container>
	)
}

export default DisplayBar;