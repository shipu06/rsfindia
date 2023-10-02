import React from 'react';
import {
	Box,
	Heading,
	Text,
	VStack,
	useColorModeValue,
} from '@chakra-ui/react';
import CardComponent from '../card';
import ChildEducation from './../../assets/download.jpeg';
import FoodDistribution from './../../assets/images.jpeg';
import Plantation from './../../assets/plantation.jpeg';

const OurGoal = () => {
	const bgColor = useColorModeValue('gray.100', 'gray.800');
	const borderColor = useColorModeValue('gray.200', 'gray.600');
	const goals = [
		{
			type: 'display',
			image: ChildEducation,
			title: 'Child Education',
			description: 'Quality education empowers children with knowledge, critical thinking skills, and the ability to dream big. It breaks the chains of poverty, transforms communities, and fosters innovation.'
		},
		{
			type: 'display',
			image: FoodDistribution,
			title: 'Food Distribution',
			description: 'We organise food distribution program to bridges the gap between scarcity and abundance.In the face of hunger, individuals cannot thrive, children cannot learn, and communities cannot prosper.'
		},
		{
			type: 'display',
			image: Plantation,
			title: 'Plantation',
			description: "When we plant trees, we're like Earth's gardeners, taking care of our planet. It's a way to fight climate change and make our world cooler and greener. It's also a gift for the future generation."
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
			<VStack spacing={4} my={'4vh'} justifyContent={'center'} flexDirection={'row'} gap={'2em'}>
				{
					goals.map((item, index) => (
						<CardComponent key={index} type={item.type} image={item.image} title={item.title} description={item.description} />
					))
				}
			</VStack>
		</Box>
	);
};

export default OurGoal;
