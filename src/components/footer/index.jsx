import { Container, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import bgImage from './../../assets/footer_bg.png';

const Footer = () => {
	return (
		<Container bgImg={bgImage} maxW='100%' h={'60vh'} color={'white'}>
			<Stack>
				<Stack>
					<Text>Contact Info : </Text>
					<Text>Address : m-6,chandra chauraha, sarnath, varanasi,India</Text>
					<Text>Phone : 7905910944</Text>
					<Text>Email : shipu1413@gmail.com</Text>
				</Stack>
				<Stack>
					<Text>Important links : </Text>
					<Text>About US</Text>
					<Text>Events</Text>
					<Text>Testimonial</Text>
					<Text>All Doners</Text>
				</Stack>
				<Stack>
					<Text>Join Us :</Text>
					<Text>About US</Text>
					<Text>Events</Text>
					<Text>Testimonial</Text>
					<Text>All Doners</Text>
				</Stack>
			</Stack>
		</Container>
	)
}

export default Footer;