'use client'

import {
	Container,
	Stack,
} from '@chakra-ui/react'
import CardComponent from '../card'

export default function AllMember() {
	return (
		<Container maxW={'8xl'} h={'70vh'} display={'flex'} alignItems={'center'} >
			<Stack
				align={'center'}
				spacing={{ base: 8, md: 10 }}
				py={{ base: 20, md: 28 }}
				direction={{ base: 'column', md: 'row' }}>
				<CardComponent type='display' />
				<CardComponent type='display' />
				<CardComponent type='display' />
				<CardComponent type='display' />
			</Stack>
		</Container>
	)
}