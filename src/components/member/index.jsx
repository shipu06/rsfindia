'use client'

import {
	Container,
	Heading,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react'
import CardComponent from '../card';
import member1 from './../../assets/member1.jpeg';
import member2 from './../../assets/member2.jpeg';
import member3 from './../../assets/member3.jpeg';


export default function AllMember() {
	const borderColor = useColorModeValue('gray.200', 'gray.600');
	const members = [
		{
			type: 'member',
			title: 'Satyam Singh',
			image: member1
		},
		{
			type: 'member',
			title: 'Satyam Singh',
			image: member2
		},
		{
			type: 'member',
			title: 'Satyam Singh',
			image: member3
		}
	]
	return (
		<Container maxW={'100%'} h={'85vh'} display={'flex'} alignItems={'center'} flexDirection={'column'} py={8}
			borderRadius="lg"
			boxShadow="md"
			borderWidth="1px"
			borderColor={borderColor}
			textAlign="center">
			<Stack>
				<Heading as="h4" fontSize="2xl" mb={6} fontWeight="bold">
					Team
				</Heading>
				<Heading
					lineHeight={1.1}
					fontWeight={600}
					fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>

					<Text as={'span'} color={'red.400'}>
						Meet Our Members!
					</Text>
				</Heading>
			</Stack>
			<Stack
				align={'center'}
				spacing={{ base: 8, md: 10 }}
				py={{ base: 16, md: 20 }}
				direction={{ base: 'column', md: 'row' }} >
				{
					members.map((item, index) => (
						<CardComponent key={index} type={item.type} title={item.title} image={item.image} />
					))
				}
			</Stack>
		</Container>
	)
}