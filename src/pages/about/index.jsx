import { Container } from '@chakra-ui/layout'
import React from 'react'
import OurGoal from '../../components/ourGoal'
import ComponentDisplay from '../../components/display'
import About from '../../components/aboutUs'
import Testimonial from '../../components/carousel'
import DisplayBar from '../../components/data-display'
const AboutUs = () => {
	return (
		<div>
			<ComponentDisplay name="About Us" />
			<OurGoal />
			<About />
			<Testimonial />
			<DisplayBar />
		</div>
	)
}

export default AboutUs;