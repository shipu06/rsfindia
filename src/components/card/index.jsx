import React from 'react';
import { Card, CardHeader, CardBody, Heading, Text, Image, Progress, Stack } from '@chakra-ui/react'

const CardComponent = ({ key, type, image, title, description }) => {
	console.log(type, 'this is type')
	return (
		<Card maxW='md' overflow={'hidden'} width={'22rem'} key={key} h={type === 'fundraiser' ? '54vh' : '45vh'}>
			<Image
				objectFit='cover'
				src={image}
				alt='Chakra UI'
				height={type === 'member' ? '22rem' : '15rem'}
			/>
			<CardHeader p={'0px'}>
				<Heading as="h3" fontSize="2xl" fontWeight="bold" p={'0.7rem 1.25rem 0.5rem'} color={'red.400'}>
					{title}
				</Heading>
			</CardHeader>
			<CardBody p={'0.4rem 1.25rem 0rem'} >
				{
					type === 'fundraiser' ? (
						<Stack>
							<Text fontSize={'16px'}>{"Anuj Singh, a remarkable student currently in the seventh grade. Anuj's academic journey is a shining example of dedication and intelligence."}</Text>
							<Progress value={64} colorScheme='green' borderRadius={'6px'} my={'1rem'} />
							<Stack display={'flex'} flexDirection='row' justifyContent='space-between' my={'1rem'}>
								<Text>Raised: 10000</Text>
								<Text>Goal : 100000</Text>
							</Stack>
						</Stack>
					) : (
						type === 'member' ? (
							<Text fontSize={'14px'}>{null}</Text>
						) : (
							<Text fontSize={'14px'}>{description}</Text>
						)
					)
				}
			</CardBody>
		</Card>
	)
}

export default CardComponent