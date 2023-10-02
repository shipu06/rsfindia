import React, { useState } from 'react';
import {
	Box,
	FormControl,
	FormLabel,
	Input,
	RadioGroup,
	Stack,
	Radio,
	Select,
	Button,
	Container,
} from '@chakra-ui/react';

const SignUpComponent = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		mobile: '',
		password: '',
		dob: '',
		gender: 'male',
		country: 'usa',
		city: '',
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	return (
		<Container>
			<Box p={4}>
				<form>
					<FormControl id="name">
						<FormLabel>Name:</FormLabel>
						<Input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleInputChange}
						/>
					</FormControl>

					<FormControl id="email">
						<FormLabel>Email:</FormLabel>
						<Input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleInputChange}
						/>
					</FormControl>

					<FormControl id="phone">
						<FormLabel>Phone:</FormLabel>
						<Input
							type="tel"
							name="phone"
							value={formData.phone}
							onChange={handleInputChange}
						/>
					</FormControl>

					<FormControl id="mobile">
						<FormLabel>Mobile:</FormLabel>
						<Input
							type="tel"
							name="mobile"
							value={formData.mobile}
							onChange={handleInputChange}
						/>
					</FormControl>

					<FormControl id="password">
						<FormLabel>Password:</FormLabel>
						<Input
							type="password"
							name="password"
							value={formData.password}
							onChange={handleInputChange}
						/>
					</FormControl>

					<FormControl id="dob">
						<FormLabel>Date of Birth:</FormLabel>
						<Input
							type="date"
							name="dob"
							value={formData.dob}
							onChange={handleInputChange}
						/>
					</FormControl>

					<FormControl id="gender">
						<FormLabel>Gender:</FormLabel>
						<RadioGroup
							name="gender"
							value={formData.gender}
							onChange={handleInputChange}
						>
							<Stack direction="row">
								<Radio value="male">Male</Radio>
								<Radio value="female">Female</Radio>
								<Radio value="other">Other</Radio>
							</Stack>
						</RadioGroup>
					</FormControl>

					<FormControl id="country">
						<FormLabel>Country:</FormLabel>
						<Select
							name="country"
							value={formData.country}
							onChange={handleInputChange}
						>
							<option value="usa">USA</option>
							<option value="canada">Canada</option>
							{/* Add more countries as needed */}
						</Select>
					</FormControl>

					<FormControl id="city">
						<FormLabel>City:</FormLabel>
						<Select
							name="city"
							value={formData.city}
							onChange={handleInputChange}
						>
							{/* Add cities based on the selected country */}
						</Select>
					</FormControl>

					<Button type="submit" mt={4} colorScheme="teal">
						Register
					</Button>
				</form>
			</Box>
		</Container>
	);
};

export default SignUpComponent;
