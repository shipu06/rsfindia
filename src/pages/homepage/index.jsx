import { Container } from '@chakra-ui/react';
import React from 'react'
import HeroSection from '../../components/heroSection';
import OurGoal from '../../components/ourGoal';
import AboutUs from '../../components/aboutUs';
import Fundraiser from '../../components/fundraiser';
import AllMember from '../../components/member';
import DisplayBar from '../../components/data-display';
import Testimonial from '../../components/carousel';

const Homepage = () => {
	return (
		<Container className='container' maxW={'100%'} m={'0px'} p={'0px'} mt={'6vh'} >
			<HeroSection />
			<OurGoal />
			<AboutUs />
			<Fundraiser />
			<AllMember />
			<Testimonial />
			<DisplayBar />
		</Container>

	)
}

export default Homepage;