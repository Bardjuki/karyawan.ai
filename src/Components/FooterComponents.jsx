import { Box, Circle, Flex, Icon, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { Link, NavLink } from 'react-router-dom';
import { BsTwitterX } from 'react-icons/bs';
import { FaDiscord } from 'react-icons/fa6';

const FooterComponents = () => {
	return (
		<Stack w={'98.5vw'} pt={'6em'} bgColor={'rgb(18,19,36)'}>
			<Flex flexDirection={'column'}>
				<Flex
					mb={'6em'}
					direction={{ base: 'column',md: 'row' }}
					justifyContent={'space-evenly'}
				>
					<Flex
						ml={5}
						mt={{ base: '5em', lg: '0em' }}
						direction={'column'}
						justifyContent={'center'}
						alignItems={'center'}
					>
						<Box ml={{lg:'2em'}}>
							<Link href="/">
								<Image
									width={'250PX'}
									src="https://deoapp-bucket.s3.ap-southeast-1.amazonaws.com/img-fzl/2.png"
								/>
							</Link>
						</Box>
						<Flex gap={'0.5em'} justifyContent={'center'} alignItems={'center'}>
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
					<Flex
							justifyContent={'center'}
							alignItems={{base:'center', md:'start'}}
							text
							direction={'column'}
							mt={{ base: '1em', lg: '0em' }}
						
					>
						<Text
							mt={{ base: '1em', lg: '0em' }}
							fontSize={'1.75em'}
							fontWeight={600}
							
						>
							Support
						</Text>
						<NavLink to={'/'}>Help</NavLink>
						<NavLink to={'/'}>Use Cases</NavLink>
						<NavLink to={'/'}>AI for Slack</NavLink>
						<NavLink to={'/'}>Ai for Discord</NavLink>
						<NavLink to={'/'}>API</NavLink>
						<NavLink to={'/'}>Our Blog</NavLink>
						<NavLink to={'/'}>Community</NavLink>
						<NavLink to={'/'}>Merketing</NavLink>
					</Flex>
					<Flex
						justifyContent={'center'}
						alignItems={{base:'center', md:'start'}}
						direction={'column'}
						mt={{ base: '1em', lg: '0em' }}
					
					>
						<Text fontSize={'1.75em'} fontWeight={600} mr={{lg:'2em'}}>
							About
						</Text>
						<NavLink to={'/'}>Enterprise</NavLink>
						<NavLink to={'/'}>Affiliates</NavLink>
						<NavLink to={'/'}>Terms & Conditions</NavLink>
						<NavLink to={'/'}>Privacy Policy</NavLink>
						<NavLink to={'/'}>Pricing</NavLink>
						<NavLink to={'/'}>Log In</NavLink>
						<NavLink to={'/'}>Sign Up</NavLink>
					</Flex>
				</Flex>
				<SimpleGrid  display={'flex'} flexDirection={{base:'column', md:'row'}} columns={{base:1, md:2, lg:3}} mt={{lg:'4em'}} mb={'2em'} justifyContent={'center'} alignItems={'center'} gap={3} >
						<Flex gap={3}>
						<NavLink to={'/'}>English</NavLink>
						<NavLink to={'/'}>Español</NavLink>
						<NavLink to={'/'}>Français</NavLink>
						</Flex>
						<Flex gap={3}>
						<NavLink to={'/'}>Deutsch</NavLink>
						<NavLink to={'/'}>日本語</NavLink>
						<NavLink to={'/'}>한국어</NavLink>
						</Flex>
						<Flex gap={3}>
						<NavLink to={'/'}>Português</NavLink>
						<NavLink to={'/'}>Polski</NavLink>
						<NavLink to={'/'}>العربية</NavLink>
						</Flex>
				</SimpleGrid>
			</Flex>
		</Stack>
	);
};

export default FooterComponents;
