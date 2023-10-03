import React, { useState, useEffect } from 'react';
import { Box, Button, Center, IconButton, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import member1 from './../../assets/member1.jpeg';
import './carousel.style.css';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'


const images = [
	'https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
	'https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
	'https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
	// Add more image URLs as needed
];

const Testimonial = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const bgColor = useColorModeValue('gray.100', 'gray.800');


	const handleSlideChange = (index) => {
		setCurrentSlide(index);
	};

	const handleNext = () => {
		setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
	};

	const handlePrev = () => {
		setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
	};

	useEffect(() => {
		const interval = setInterval(() => {
			handleNext();
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<Box position="relative" py={'5rem'} bgColor={bgColor}>
			<Carousel showThumbs={false} selectedItem={currentSlide} onChange={handleSlideChange}>
				{images.map((image, index) => (
					<Stack key={index} alignItems={'center'} display={'flex'} flexDirection={'column'}>
						<Stack display={'flex'} alignItems={'center'} h={'15rem'} m={'0px'} p={'0px'}>
							<Image src={member1} alt="" className='slider-image' />
							<Text fontSize={'28px'} fontWeight={800}>Margaret Lawson</Text>
							<Text>Creative Director</Text>
						</Stack>
						<Stack w={'40rem'}>
							<Text>“I am at an age where I just want to be fit and healthy our bodies are our responsibility! So start caring for your body and it will care for you. Eat clean it will care for you and workout hard.”</Text>
						</Stack>
					</Stack>
				))}
			</Carousel>
			<Center position="absolute" top="50%" left="2" transform="translateY(-50%)">
				<IconButton
					aria-label="right-arrow"
					colorScheme="messenger"
					borderRadius="full"
					position="absolute"
					transform={'translate(0%, -50%)'}
					zIndex={2}
					onClick={handlePrev}
					marginLeft={'50px'}
				>
					<BiLeftArrowAlt />
				</IconButton>
			</Center>
			<Center position="absolute" top="50%" right="2" transform="translateY(-50%)">
				<IconButton
					aria-label="right-arrow"
					colorScheme="messenger"
					borderRadius="full"
					position="absolute"
					transform={'translate(0%, -50%)'}
					zIndex={2}
					marginRight={'50px'}
					onClick={handleNext}
				>
					<BiRightArrowAlt />
				</IconButton>
			</Center>
		</Box>
	);
};

export default Testimonial;
