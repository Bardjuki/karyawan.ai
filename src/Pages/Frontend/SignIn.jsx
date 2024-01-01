import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Image,
	Input,
	Stack,
	Text,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const SignIn = () => {
	return (
		<Stack width={'100vw'}>
			<Flex minHeight="100vh" alignItems={'center'} justifyContent={'center'}>
				<Box
					p="8"
					maxWidth="400px"
					borderWidth="1px"
					borderRadius="lg"
					boxShadow="lg"
				>
					<Box mb="4" color={'black'}>
						<Image
							src="https://meetcody.ai/wp-content/themes/cody_v1/assets/images/logo.svg"
							alt="Header"
							sx={{ width: '100%', borderRadius: '8px' }}
						/>
					</Box>

					<Text fontSize="1.25em" mb="4" textAlign="center">
						Sign into your account
					</Text>
					<form>
						<FormControl mb={2} isRequired>
							<FormLabel>Email</FormLabel>
							<Input placeholder="Email" />
						</FormControl>
						<FormControl isRequired>
							<FormLabel>Password</FormLabel>
							<Input placeholder="Password" />
						</FormControl>
						<NavLink to={'/'}>
							<Button mt={3} type="submit" colorScheme="teal" width="full">
								Sign In
							</Button>
						</NavLink>
					</form>
					<Flex mt={1} justifyContent={'space-between'}>
						<NavLink to={'/auth/signup'}>
							<Text>Sign up</Text>
						</NavLink>
						<NavLink to={'/auth/signup'}>
							<Text>Forgot Password</Text>
						</NavLink>
					</Flex>
				</Box>
			</Flex>
		</Stack>
	);
};

export default SignIn;
