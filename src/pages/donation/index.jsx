'use client'
import { useEffect, useState } from 'react';
import {
	Box,
	ButtonGroup,
	Button,
	Heading,
	Flex,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	FormHelperText,
	InputRightElement,
	Stack,
} from '@chakra-ui/react'

import { useToast } from '@chakra-ui/react'

const Form1 = () => {
	const [show, setShow] = useState(false)
	const handleClick = () => setShow(!show)
	const [selectedFile, setSelectedFile] = useState()
	const handleFileInputChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				const base64String = e.target.result.split(',')[1];
				setSelectedFile(base64String);
			};
			reader.readAsDataURL(file);
		}
	};

	useEffect(() => {
		console.log(selectedFile, 'this is selected file')
	}, [selectedFile])

	return (
		<Stack>
			<Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
				User Registration
			</Heading>
			<Flex>
				<FormControl mr="5%">
					<FormLabel htmlFor="first-name" fontWeight={'normal'}>
						First name
					</FormLabel>
					<Input id="first-name" placeholder="First name" />
				</FormControl>

				<FormControl>
					<FormLabel htmlFor="last-name" fontWeight={'normal'}>
						Last name
					</FormLabel>
					<Input id="last-name" placeholder="First name" />
				</FormControl>
			</Flex>
			<FormControl mt="2%">
				<FormLabel htmlFor="email" fontWeight={'normal'}>
					Email address
				</FormLabel>
				<Input id="email" type="email" />
				<FormHelperText>We&apos;ll never share your email.</FormHelperText>
			</FormControl>
			<FormControl mt="2%">
				<FormLabel htmlFor="email" fontWeight={'normal'}>
					Email address
				</FormLabel>
				<Input type="file" onChange={handleFileInputChange} accept="image/*" mb={4} />
				<FormHelperText>We&apos;ll never share your email.</FormHelperText>
			</FormControl>
			<FormControl mt="2%">
				<FormLabel htmlFor="email" fontWeight={'normal'}>
					Email address
				</FormLabel>
				<Input id="email" type="email" />
				<FormHelperText>We&apos;ll never share your email.</FormHelperText>
			</FormControl>

			<FormControl>
				<FormLabel htmlFor="password" fontWeight={'normal'} mt="2%">
					Password
				</FormLabel>
				<InputGroup size="md">
					<Input
						pr="4.5rem"
						type={show ? 'text' : 'password'}
						placeholder="Enter password"
					/>
					<InputRightElement width="4.5rem">
						<Button h="1.75rem" size="sm" onClick={handleClick}>
							{show ? 'Hide' : 'Show'}
						</Button>
					</InputRightElement>
				</InputGroup>
			</FormControl>
		</Stack>
	)
}

export default function DonationForm() {
	const toast = useToast()
	// const [step, setStep] = useState(1)

	return (
		<Box minH={'79.8vh'}>
			<Box
				borderWidth="1px"
				rounded="lg"
				shadow="1px 1px 3px rgba(0,0,0,0.3)"
				maxWidth={800}
				p={6}
				m="100px auto"
				as="form">
				<Form1 />
				<ButtonGroup mt="5%" w="100%">
					<Flex w="100%" justifyContent="space-between">
						<Flex>
							<Button
								isDisabled={true}
								colorScheme="teal"
								variant="solid"
								w="7rem"
								mr="5%">
								Back
							</Button>
							<Button
								w="7rem"
								isDisabled={false}
								colorScheme="teal"
								variant="outline">
								Next
							</Button>
						</Flex>

						<Button
							w="7rem"
							colorScheme="red"
							variant="solid"
							onClick={() => {
								toast({
									title: 'Account created.',
									description: "We've created your account for you.",
									status: 'success',
									duration: 3000,
									isClosable: true,
								})
							}}>
							Submit
						</Button>
					</Flex>
				</ButtonGroup>
			</Box>
		</Box>
	)
}