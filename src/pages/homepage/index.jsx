import { Container } from '@chakra-ui/react';
import React from 'react'
import HeroSection from '../../components/heroSection';
import OurGoal from '../../components/ourGoal';
import AboutUs from '../../components/aboutUs';
import Fundraiser from '../../components/fundraiser';
import AllMember from '../../components/member';
import DisplayBar from '../../components/display';

const Homepage = () => {
	return (
		<Container maxW={'100%'} overflow={'hidden'} p={'0px'} m={'0px'}>
			<HeroSection />
			<OurGoal />
			<AboutUs />
			<Fundraiser />
			<AllMember />
			<DisplayBar />
		</Container>
	)
}

export default Homepage;