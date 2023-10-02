import {
	Box,
	Flex,
	Avatar,
	HStack,
	IconButton,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useDisclosure,
	useColorModeValue,
	Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';
// import './styles.css';


const Links = [
	{ text: 'Home', url: '/' },
	{ text: 'About', url: '/about' },
	{ text: 'Latest Cause', url: '/latest-cause' },
	{ text: 'Social Events', url: '/social-event' },
	{ text: 'Blog', url: '/blog' },
	{ text: 'Contact', url: '/contact' },
]

const NavLink = (props) => {
	const { children } = props

	return (
		<Box
			as="a"
			px={2}
			py={1}
			rounded={'md'}
			_hover={{
				textDecoration: 'none',
				bg: useColorModeValue('gray.200', 'gray.700'),
			}}
			href={children.url}>
			{children.text}
		</Box>
	)
}

export default function Navbar() {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [flag, setFlag] = useState(true)

	return (
		<>
			<Box bg={'var(--primary-white-color)'} boxShadow={'0px 0px 20px 0px rgba(0, 0, 0, 0.5)'} px={4} position={'fixed'} top={'0'} w={'100%'} zIndex={'40'}>
				<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
					<IconButton
						size={'md'}
						icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
						aria-label={'Open Menu'}
						display={{ md: 'none' }}
						onClick={isOpen ? onClose : onOpen}
					/>
					<HStack spacing={8} alignItems={'center'} width={'96%'} justifyContent={'space-between'}>
						<Box fontSize={'40px'} ml={'45px'} color="var(--heading-text-colors)" fontWeight={'900'}>R.S Foundation</Box>
						<HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
							{Links.map((link) => (
								<NavLink key={link}>{link}</NavLink>
							))}
						</HStack>
					</HStack>
					<Flex alignItems={'center'}>
						<Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }} mx={'10px'}>
							<Button
								rounded={'full'}
								size={'md'}
								fontWeight={'normal'}
								px={6}
								colorScheme={'red'}
								bg={'red.400'}
								_hover={{ bg: 'red.500' }}
							// onClick={handleClick}
							>
								Donate Now
							</Button>
							{!flag ? <Button
								rounded={'full'}
								size={'md'}
								fontWeight={'normal'}
								px={6}
								w={'8rem'}>
								{/* leftIcon={<PlayIcon h={4} w={4} color={'gray.300'} />}*/}
								Join us
							</Button> : null}
						</Stack>
						{flag ? <Menu marginLeft={'10px'}>
							<MenuButton
								as={Button}
								rounded={'full'}
								variant={'link'}
								cursor={'pointer'}
								minW={0}>
								<Avatar
									size={'md'}
									src={
										'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
									}
								/>
							</MenuButton>
							<MenuList>
								<MenuItem>Link 1</MenuItem>
								<MenuItem>Link 2</MenuItem>
								<MenuDivider />
								<MenuItem>Link 3</MenuItem>
							</MenuList>
						</Menu> : null}
					</Flex>
				</Flex>

				{isOpen ? (
					<Box pb={4} display={{ md: 'none' }}>
						<Stack as={'nav'} spacing={4}>
							{Links.map((link) => (
								<NavLink key={link}>{link}</NavLink>
							))}
						</Stack>
					</Box>
				) : null}
			</Box>
		</>
	)
}