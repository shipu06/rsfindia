import React from 'react';
import {
	Box,
	Heading,
	Text,
	VStack,
	useColorModeValue,
} from '@chakra-ui/react';
import CardComponent from '../card';
import child1 from './../../assets/child1.jpeg';
import child2 from './../../assets/child2.jpeg';
import child3 from './../../assets/child3.jpeg';

const Fundraiser = () => {
	const bgColor = useColorModeValue('gray.100', 'gray.800');
	const borderColor = useColorModeValue('gray.200', 'gray.600');
	const fundraiser = [
		{
			type: 'fundraiser',
			image: child1,
			title: 'Shivam Singh'
		},
		{
			type: 'fundraiser',
			image: child2,
			title: 'Anuj Singh'
		},
		{
			type: 'fundraiser',
			image: child3,
			title: 'Pradeep Singh'
		}
	]

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
				How we are doing
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
					Contribute to our Mission,
				</Text>
				<br />
				<Text as={'span'} color={'red.400'}>
					Empower Change!
				</Text>
			</Heading>
			<VStack spacing={4} mt={'8vh'} justifyContent={'center'} flexDirection={'row'} gap={'2em'}>
				{
					fundraiser.map((item, index) => (
						<CardComponent key={index} type={item.type} image={item.image} title={item.title} />
					))
				}
			</VStack>
		</Box>
	);
};

export default Fundraiser;
