import { Container, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import Counter from '../counter';

const DisplayBar = () => {
	const bgColor = useColorModeValue('gray.100', 'gray.800');
	return (
		<Container maxW={'100vw'} bg={bgColor} h="20vh" justifyContent={'center'} display={'flex'} >
			<Stack display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-around'} w={'8xl'}>
				<Stack alignItems={'center'}>
					<Counter finalNumber={10} />center
					<Text>Child Education Adopted</Text>
				</Stack>
				<Stack alignItems={'center'}>
					<Counter finalNumber={1000} />
					<Text>Food Packets Served</Text>
				</Stack>
				<Stack alignItems={'center'}>
					<Counter finalNumber={10} />
					<Text>Tree Planted and Protected</Text>
				</Stack>
				<Stack alignItems={'center'}>
					<Counter finalNumber={10} />
					<Text>Social Awareness Campaign</Text>
				</Stack>
			</Stack>
		</Container>
	)
}

export default DisplayBar;