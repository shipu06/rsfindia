import React from 'react';
import {
	Box,
	Heading,
	Text,
	VStack,
	useColorModeValue,
} from '@chakra-ui/react';
import CardComponent from '../card';

const OurGoal = () => {
	const bgColor = useColorModeValue('gray.100', 'gray.800');
	const borderColor = useColorModeValue('gray.200', 'gray.600');

	return (
		<Box
			bg={bgColor}
			py={8}
			borderRadius="lg"
			boxShadow="md"
			borderWidth="1px"
			borderColor={borderColor}
			textAlign="center"
		>
			<Heading as="h4" fontSize="2xl" mb={6} fontWeight="bold">
				What We Are Doing
			</Heading>
			<Heading
				lineHeight={1.1}
				fontWeight={600}
				fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
				<Text
					as={'span'}
					position={'relative'}
					_after={{
						content: "''",
						width: 'full',
						height: '30%',
						position: 'absolute',
						bottom: 1,
						left: 0,
						bg: 'red.400',
						zIndex: -1,
					}}>
					We Are In A Mission To
				</Text>
				<br />
				<Text as={'span'} color={'red.400'}>
					Help The Helpless!
				</Text>
			</Heading>
			<VStack spacing={4} mt={'8vh'} justifyContent={'center'} flexDirection={'row'} gap={'2em'}>
				<CardComponent type='display' />
				<CardComponent type='display' />
				<CardComponent type='display' />
			</VStack>
		</Box>
	);
};

export default OurGoal;
