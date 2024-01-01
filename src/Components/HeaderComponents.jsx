
import {
	Box,
	Button,
	Flex,
	Image,
	Link,
	Stack,
	Text,
	Icon,
	useDisclosure,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerBody,
	Circle,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
import { BsTwitterX } from 'react-icons/bs';
import { FaDiscord } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const NavBar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef();
	const MotionBox = motion(Box);

	const menuItem = [
		{
			path: '/',
			name: 'Home',
		},
		{
			path: '/use-cases',
			name: 'Use Cases',
		},
		{
			path: '/enterprise',
			name: 'Enterprise',
		},
		{
			path: '/pricing',
			name: 'Pricing',
		},
		{
			path: '/blog',
			name: 'Blog',
		},
	];
	return (
		<>
			<Stack display={{ lg: 'block', base: 'none' }}>
				<Flex
					bgColor={'rgb(18,19,36)'}
					w={'98.5vw'}
					h={'8em'}
					justifyContent={'space-between'}
				>
					<Box mt={'2em'} ml={'2em'}>
						<Link href="/">
							<Image
								width={'200px'}
								src="https://meetcody.ai/wp-content/themes/cody_v1/assets/images/logo.svg"
							/>
						</Link>
					</Box>
					<Flex
						gap={'2.25em'}
						justifyContent={'center'}
						alignItems={'center'}
						mr={'5em'}
						ml={'5em'}
					>
						{menuItem.map((item, index) => (
							<NavLink to={item.path} key={index}>
								<Text
									fontSize={15}
									fontWeight={500}
									textColor={'white'}
									_hover={{ textColor: 'rgb(223,106,154)' }}
								>
									{item.name}
								</Text>
							</NavLink>
						))}
					</Flex>
					<Flex
						gap={'1.5em'}
						mr={'3em'}
						justifyContent={'center'}
						alignItems={'center'}
						textColor={'white'}
					>
						<NavLink to={'/auth/signin'}>
							<Text
								fontSize={18}
								fontWeight={500}
								_active={{ textColor: 'rgb(223,106,154)' }}
								_hover={{ textColor: 'rgb(223,106,154)' }}
							>
								Login
							</Text>
						</NavLink>
						<MotionBox
							as={Button}
							width={'11.5em'}
							height={'3.8em'}
							borderRadius={100}
							border={'none'}
							bgColor={'rgb(42,72,223)'}
							_hover={{ bgColor: 'rgb(223,106,154)' }}
							whileHover={{
								x: [-10, 10, -10],
								y: [-5, 8, -5],
								transition: { duration: 0.5, repeat: Infinity },
							}}
						>
							<NavLink to={'/auth/signup'}>
								<Text textColor={'white'} fontSize={'1.25em'} fontWeight={550}>
									Join Free
								</Text>
							</NavLink>
						</MotionBox>
					</Flex>
				</Flex>
			</Stack>
			<Stack display={{ lg: 'none', base: 'block' }} width={ '100vw' }>
				<Flex
					bgColor={'rgb(18,19,36)'}
					h={108}
					justifyContent={'space-between'}
					alignItems={'center'}
				>
					<Box ml={'1em'}>
						<Link href="/">
							<Image
								boxSize={100}
								src="https://meetcody.ai/wp-content/themes/cody_v1/assets/images/logo.svg"
							/>
						</Link>
					</Box>
					<Button
						ref={btnRef}
						onClick={onOpen}
						bgColor={'rgb(18,19,36)'}
						color={'blue'}
					>
						<Icon boxSize={'2.5em'} as={HamburgerIcon} />
					</Button>
					<Drawer
						isOpen={isOpen}
						placement="right"
						onClose={onClose}
						finalFocusRef={btnRef}
					>
						<DrawerOverlay boxSize={'3em'} />
						<DrawerContent>
							<DrawerCloseButton
								boxSize={'4em'}
								bgColor={'white'}
								color={'black'}
							/>
							<DrawerBody bgColor={'rgb(42,72,223)'}>
								<Flex direction={'column'}>
									<Box mt={'5em'}>
										<Link href="/">
											<Image src="https://meetcody.ai/wp-content/themes/cody_v1/assets/images/cody_logo_white.svg" />
										</Link>
									</Box>
									<Flex
										mt={'1em'}
										direction={'column'}
										gap={'0.75em'}
										justifyContent={'center'}
										alignItems={'center'}
									>
										{menuItem.map((item, index) => (
											<NavLink to={item.path} key={index}>
												<Text
													fontWeight={500}
													textColor={'white'}
													_hover={{ textColor: 'rgb(223,106,154)' }}
												>
													{item.name}
												</Text>
											</NavLink>
										))}
									</Flex>
									<Flex
										mt={'2em'}
										direction={'column'}
										gap={'1em'}
										justifyContent={'center'}
										alignItems={'center'}
										textColor={'white'}
									>
										<NavLink to={'/auth/signin'}>
											<Text
												fontWeight={600}
												_active={{ textColor: 'rgb(223,106,154)' }}
												_hover={{ textColor: 'rgb(223,106,154)' }}
											>
												Login
											</Text>
										</NavLink>
										<NavLink to={'/auth/signup'}>
											<MotionBox
												ml={2}
												as={Button}
												width={'11.5em'}
												height={'3.8em'}
												borderRadius={100}
												border={'none'}
												bgColor={'white'}
												_hover={{ bgColor: 'rgb(223,106,154)' }}
												whileHover={{
													x: [-10, 10, -10],
													y: [-5, 8, -5],
													transition: { duration: 0.5, repeat: Infinity },
												}}
											>
												<NavLink to={'/auth/signup'}>
													<Text
														textColor={'blue'}
														fontSize={'1.25em'}
														fontWeight={550}
													>
														Join Free
													</Text>
												</NavLink>
											</MotionBox>
										</NavLink>
									</Flex>
									<Flex
										gap={'0.5em'}
										justifyContent={'center'}
										alignItems={'center'}
									>
										<Box mt={'4em'}>
											<Link href="/">
												<Circle size={'3em'} bgColor={'white'} color={'blue'}>
													<Icon as={BsTwitterX} />
												</Circle>
											</Link>
										</Box>
										<Box mt={'4em'}>
											<Link href="/">
												<Circle size={'3em'} bgColor={'white'} color={'blue'}>
													<Icon as={FaDiscord} />
												</Circle>
											</Link>
										</Box>
									</Flex>
								</Flex>
							</DrawerBody>
						</DrawerContent>
					</Drawer>
				</Flex>
			</Stack>
		</>
	);
};

export default NavBar;
