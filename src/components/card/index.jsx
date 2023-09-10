import React from 'react';
import { Card, CardHeader, CardBody, Heading, Text, Image, Progress } from '@chakra-ui/react'

const CardComponent = ({ type }) => {
	console.log(type, type === 'fundraiser')
	return (
		<Card maxW='md' overflow={'hidden'}>
			<Image
				objectFit='cover'
				src='https://plus.unsplash.com/premium_photo-1663040178972-ee1d45d33899?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNoYXJpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
				alt='Chakra UI'
			/>
			<CardHeader>
				<Heading as="h3" fontSize="2xl" fontWeight="bold">
					What We Are Doing
				</Heading>
			</CardHeader>
			<CardBody>
				{
					type === 'fundraiser' ? (
						<Progress hasStripe value={64} colorScheme='green' borderRadius={'6px'} />
					) : (
						<Text>
							With Chakra UI, I wanted to sync the speed of development with the speed
							of design. I wanted the developer to be just as excited as the designer to
							create a screen.
						</Text>
					)
				}
			</CardBody>
		</Card>
	)
}

export default CardComponent