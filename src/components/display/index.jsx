import { Container, Text } from '@chakra-ui/layout'
import React from 'react';
import bgImage from './../../assets/hero2.png';

const ComponentDisplay = ({ name }) => {
	return (
		<Container bgImage={bgImage} h={'38vh'} maxW={'100vw'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
			<Text fontSize='4rem' fontWeight={800} color={'red.400'}>{name}</Text>
		</Container>
	)
}

export default ComponentDisplay