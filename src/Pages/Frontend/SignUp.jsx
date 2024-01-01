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

const SignUp = () => {
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
					{/* Header Image */}
					<Box mb="4" color={'black'}>
						<Image
							src="https://meetcody.ai/wp-content/themes/cody_v1/assets/images/logo.svg"
							alt="Header"
							sx={{ width: '100%', borderRadius: '8px' }}
						/>
					</Box>

					{/* Form */}
					<Text fontSize="1.25em" mb="4" textAlign="center">
						Sign into your account
					</Text>
					<form>
						<FormControl mb={2} isRequired>
							<FormLabel>Company name</FormLabel>
							<Input placeholder="Your companny or team name" />
						</FormControl>
						<FormControl isRequired>
							<FormLabel>First name</FormLabel>
							<Input placeholder="Your first name" />
						</FormControl>
						<FormControl isRequired>
							<FormLabel>Last name</FormLabel>
							<Input placeholder="Your last name" />
						</FormControl>
						<FormControl isRequired>
							<FormLabel>Email</FormLabel>
							<Input placeholder="Email" />
						</FormControl>
						<FormControl isRequired>
							<FormLabel>Password</FormLabel>
							<Input placeholder="Password" />
						</FormControl>
						<Button mt={3} type="submit" colorScheme="teal" width="full">
							Create account
						</Button>
					</form>
					<Flex mt={1} justifyContent={'center'}>
						<NavLink to={'/auth/signin'}>
							<Text>Already have an account?</Text>
						</NavLink>
					</Flex>
				</Box>
			</Flex>
		</Stack>
	);
};

export default SignUp;
