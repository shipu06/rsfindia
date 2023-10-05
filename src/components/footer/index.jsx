import { Container, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import bgImage from './../../assets/footer_bg.png';
import { useLocation } from 'react-router-dom';

const Footer = () => {
	const location = useLocation();
	const [route, setRoute] = useState();
	const [path, setPath] = useState(['/contact', '/donation'])
	useEffect(() => {
		setRoute(location.pathname)
	}, [])
	return (
		<Container bgImg={bgImage} zIndex={'-30'} maxW='100%' h={'auto'} color={'white'} >
			{
				path.indexOf(route) < 0 ? (
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
				) : (
					<Stack h={'10vh'}>Hello</Stack>
				)
			}
		</Container>
	)
}

export default Footer;