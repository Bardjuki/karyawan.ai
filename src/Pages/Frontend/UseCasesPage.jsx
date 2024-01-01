
import NavBar from '../../Components/HeaderComponents';
import {
	Box,
	Button,
	Center,
	Circle,
	Flex,
	Image,
	SimpleGrid,
	Stack,
	Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import FooterComponents from '../../Components/FooterComponents';

const UseCasesPage = () => {
	const MotionBox = motion(Box);
	return (
		<>
			<NavBar />
			<Stack w={'98.5vw'} mb={'5em'}>
				<Flex justifyContent={'center'} alignItems={'Center'}>
					<Flex
						mt={20}
						w={869}
						h={181}
						justifyContent={'center'}
						direction={'column'}
					>
						<Flex
							direction={{ base: 'column', lg: 'row' }}
							justifyContent={'center'}
							alignItems={'center'}
						>
							<Text
								bgGradient="linear(to-l, #FFD460, #FFA500)"
								bgClip="text"
								fontSize={{ base: '3em', md: '4em', lg: '4.5em' }}
								fontWeight="bold"
								textAlign={'center'}
							>
								AI Chat Bot
							</Text>
							<Text
								textAlign={'center'}
								fontSize={{ base: '3em', md: '4em', lg: '4.5em' }}
								fontWeight="bold"
								textColor={'rgb(180,188,208)'}
							>
								{' '}
								Template
							</Text>
						</Flex>
						<Text textAlign={'center'}>
							Temukan berbagai Template Chatbot AI kami, dirancang untuk
							berbagai industri dan kasus penggunaan. Pilihan template kami
							bertujuan untuk memulai pembangunan bot yang sempurna untuk tim
							dan pelanggan Anda.
						</Text>
					</Flex>
				</Flex>
				<Flex
					mt={{ base: '3em', lg: '5em' }}
					direction={'row'}
					justifyContent={'center'}
				>
					<SimpleGrid columns={{ base: 1, lg: 2 }} spacing={5}>
						<Box
							mt={'1em'}
							ml={'1em'}
							display={'flex'}
							flexDirection={'column'}
							alignItems={'center'}
							justifyContent={'center'}
							bgColor={'rgb(31,32,60)'}
							mr={3}
							borderRadius={40}
							w={{ lg: 674 }}
							h={{ lg: 553 }}
						>
							<Image
								boxSize={{ base: '4em', lg: '7em' }}
								src="https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/05/Icon.png.webp"
							/>
							<Text
								fontSize={{ lg: '2.5em' }}
								fontWeight={600}
								mt={{ base: 2, lg: 5 }}
							>
								Marketing AI Assistant
							</Text>
							<Text
								textAlign={'center'}
								mt={{ base: 3, lg: 5 }}
								h={{ lg: 127 }}
								w={{ lg: 424 }}
								fontSize={{ base: '0.75em' }}
							>
								Bot Asisten Pemasaran bertindak sebagai chatbot yang canggih
								ditenagai oleh kecerdasan buatan, dirancang untuk memberikan
								dukungan pemasaran yang berharga dan wawasan kepada pengguna.
								karyawan.AI, Strategi Pemasaran Kreatif di balik Bot Asisten Pemasaran,
								berkomitmen untuk memberikan informasi yang akurat dan r...
							</Text>
							<Flex
								mt={{ base: '1em', lg: '2em' }}
								mb={{ base: '1em', lg: '2em' }}
								direction={'column'}
								justifyContent={'center'}
								alignItems={'center'}
								textColor={'white'}
							>
								<MotionBox
									as={Button}
									width={{ lg: '23em' }}
									height={{ base: '2em', lg: '5em' }}
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
									<NavLink to={'/auth/login'}>
										<Text textColor={'white'} fontSize={'2xs'} fontWeight={700}>
											Pelajari Lebih Lanjut
										</Text>
									</NavLink>
								</MotionBox>
							</Flex>
						</Box>
						<Box
							mt={'1em'}
							ml={'1em'}
							display={'flex'}
							flexDirection={'column'}
							alignItems={'center'}
							justifyContent={'center'}
							bgColor={'rgb(31,32,60)'}
							mr={3}
							borderRadius={40}
							w={{ lg: 674 }}
							h={{ lg: 553 }}
						>
							<Image
								boxSize={{ base: '4em', lg: '7em' }}
								src="https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/05/Icon-3.png.webp"
							/>
							<Text
								fontSize={{ lg: '2.5em' }}
								fontWeight={600}
								mt={{ base: 2, lg: 5 }}
							>
								Human Resources (HR) AI
							</Text>
							<Text
								textAlign={'center'}
								mt={{ base: 3, lg: 5 }}
								h={{ lg: 127 }}
								w={{ lg: 424 }}
								fontSize={{ base: '0.75em' }}
							>
								Optimalkan departemen HR Anda dan tingkatkan komunikasi dengan
								karyawan dengan membuat Chatbot HR Anda sendiri. Berikan akses
								instan kepada karyawan untuk jawaban pertanyaan umum dan hemat
								waktu berjam-jam untuk tim HR Anda. Maksimalkan produktivitas
								dan sederhanakan i...
							</Text>
							<Flex
								mt={{ base: '1em', lg: '2em' }}
								mb={{ base: '1em', lg: '2em' }}
								direction={'column'}
								justifyContent={'center'}
								alignItems={'center'}
								textColor={'white'}
							>
								<MotionBox
									as={Button}
									width={{ lg: '23em' }}
									height={{ base: '2em', lg: '5em' }}
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
									<NavLink to={'/auth/login'}>
										<Text textColor={'white'} fontSize={'2xs'} fontWeight={700}>
											Learn More
										</Text>
									</NavLink>
								</MotionBox>
							</Flex>
						</Box>
						<Box
							mt={'1em'}
							ml={'1em'}
							display={'flex'}
							flexDirection={'column'}
							alignItems={'center'}
							justifyContent={'center'}
							bgColor={'rgb(31,32,60)'}
							mr={3}
							borderRadius={40}
							w={{ lg: 674 }}
							h={{ lg: 553 }}
						>
							<Image
								boxSize={{ base: '4em', lg: '7em' }}
								src="https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/05/New-Project-71.png.webp"
							/>
							<Text
								fontSize={{ lg: '2.5em' }}
								fontWeight={600}
								mt={{ base: 2, lg: 5 }}
							>
								IT Support Chatbot
							</Text>
							<Text
								textAlign={'center'}
								mt={{ base: 3, lg: 5 }}
								h={{ lg: 127 }}
								w={{ lg: 424 }}
								fontSize={{ base: '0.75em' }}
							>
								Memberdayakan tim dukungan IT Anda dengan Chatbot Dukungan IT
								yang dipersonalisasi yang dengan efisien menjawab pertanyaan
								teknis, menyelesaikan masalah, dan membimbing pengguna melalui
								berbagai tantangan. Manfaatkan Pembangun AI kami untuk membuat
								asisten dukungan yang memanfaatkan potensi...
							</Text>
							<Flex
								mt={{ base: '1em', lg: '2em' }}
								mb={{ base: '1em', lg: '2em' }}
								direction={'column'}
								justifyContent={'center'}
								alignItems={'center'}
								textColor={'white'}
							>
								<MotionBox
									as={Button}
									width={{ lg: '23em' }}
									height={{ base: '2em', lg: '5em' }}
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
									<NavLink to={'/auth/login'}>
										<Text textColor={'white'} fontSize={{base:'2xs', md:'5em'}} fontWeight={700}>
											Learn More
										</Text>
									</NavLink>
								</MotionBox>
							</Flex>
						</Box>
						<Box
							mt={'1em'}
							ml={'1em'}
							display={'flex'}
							flexDirection={'column'}
							alignItems={'center'}
							justifyContent={'center'}
							bgColor={'rgb(31,32,60)'}
							mr={3}
							borderRadius={40}
							w={{ lg: 674 }}
							h={{ lg: 553 }}
						>
							<Image
								boxSize={{ base: '4em', lg: '7em' }}
								src="https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/06/New-Project-75.png.webp"
							/>
							<Text
								fontSize={{ lg: '2.5em' }}
								fontWeight={600}
								mt={{ base: 2, lg: 5 }}
							>
								Business Consultant
							</Text>
							<Text
								textAlign={'center'}
								mt={{ base: 3, lg: 5 }}
								h={{ lg: 127 }}
								w={{ lg: 424 }}
								fontSize={{ base: '0.75em' }}
							>
								Tingkatkan keputusan strategis Anda dengan Asisten AI Konsultan
								Bisnis yang disesuaikan. Manfaatkan kekuatan Pembangun AI kami
								untuk membuat asisten yang sesuai dengan kebutuhan khusus dan
								konteks bisnis Anda. Konsultan Bisnis dapat membantu Anda
								menganalisis industri...
							</Text>
							<Flex
								mt={{ base: '1em', lg: '2em' }}
								mb={{ base: '1em', lg: '2em' }}
								direction={'column'}
								justifyContent={'center'}
								alignItems={'center'}
								textColor={'white'}
							>
								<MotionBox
									as={Button}
									width={{ lg: '23em' }}
									height={{ base: '2em', lg: '5em' }}
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
									<NavLink to={'/auth/login'}>
										<Text textColor={'white'} fontSize={'2xs'} fontWeight={700}>
											Learn More
										</Text>
									</NavLink>
								</MotionBox>
							</Flex>
						</Box>
						<Box
							mt={'1em'}
							ml={'1em'}
							display={'flex'}
							flexDirection={'column'}
							alignItems={'center'}
							justifyContent={'center'}
							bgColor={'rgb(31,32,60)'}
							mr={3}
							borderRadius={40}
							w={{ lg: 674 }}
							h={{ lg: 553 }}
						>
							<Image
								boxSize={{ base: '4em', lg: '7em' }}
								src="https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/04/home-section_3-icon_6.png.webp"
							/>
							<Text
								fontSize={{ lg: '2.5em' }}
								fontWeight={600}
								mt={{ base: 2, lg: 5 }}
							>
								Creative AI Assistant
							</Text>
							<Text
								textAlign={'center'}
								mt={{ base: 3, lg: 5 }}
								h={{ lg: 127 }}
								w={{ lg: 424 }}
								fontSize={{ base: '0.75em' }}
							>
								Buka potensi ide inovatif dengan Asisten Kreatif yang
								dipersonalisasi untuk mendukung bisnis Anda dalam tugas kreatif.
								Hemat waktu dan usaha dengan membiarkan asisten menghasilkan
								konsep unik, menyusun pesan, dan memberikan saran berdasarkan..
							</Text>
							<Flex
								mt={{ base: '1em', lg: '2em' }}
								mb={{ base: '1em', lg: '2em' }}
								direction={'column'}
								justifyContent={'center'}
								alignItems={'center'}
								textColor={'white'}
							>
								<MotionBox
									as={Button}
									width={{ lg: '23em' }}
									height={{ base: '2em', lg: '5em' }}
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
									<NavLink to={'/auth/login'}>
										<Text textColor={'white'} fontSize={'2xs'} fontWeight={700}>
											Learn More
										</Text>
									</NavLink>
								</MotionBox>
							</Flex>
						</Box>
						<Box
							mt={'1em'}
							ml={'1em'}
							display={'flex'}
							flexDirection={'column'}
							alignItems={'center'}
							justifyContent={'center'}
							bgColor={'rgb(31,32,60)'}
							mr={3}
							borderRadius={40}
							w={{ lg: 674 }}
							h={{ lg: 553 }}
						>
							<Image
								boxSize={{ base: '4em', lg: '7em' }}
								src="https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/05/Icon-8.png.webp"
							/>
							<Text
								fontSize={{ lg: '2.5em' }}
								fontWeight={600}
								mt={{ base: 2, lg: 5 }}
							>
								AI Sales Bot Assistant
							</Text>
							<Text
								textAlign={'center'}
								mt={{ base: 3, lg: 5 }}
								h={{ lg: 127 }}
								w={{ lg: 424 }}
								fontSize={{ base: '0.75em' }}
							>
								Optimalkan upaya penjualan Anda dengan Sales Assistant yang
								dibangun khusus. Manfaatkan kekuatan AI Builder kami untuk
								membuat bot yang disesuaikan dengan kebutuhan dan konteks
								industri Anda. Sales Assistant dapat membantu Anda membuat
								konten personalisasi, memanfaatkan informasi...
							</Text>
							<Flex
								mt={{ base: '1em', lg: '2em' }}
								mb={{ base: '1em', lg: '2em' }}
								direction={'column'}
								justifyContent={'center'}
								alignItems={'center'}
								textColor={'white'}
							>
								<MotionBox
									as={Button}
									width={{ lg: '23em' }}
									height={{ base: '2em', lg: '5em' }}
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
									<NavLink to={'/auth/login'}>
										<Text textColor={'white'} fontSize={'2xs'} fontWeight={700}>
											Learn More
										</Text>
									</NavLink>
								</MotionBox>
							</Flex>
						</Box>
					</SimpleGrid>
				</Flex>
				<Box gap={3} display={'flex'} mt={'4em'} justifyContent={'center'}>
					<NavLink to={'/use-cases'}>
						<Circle size={{ base: '3em', lg: '5em' }} bg={'violet'}>
							<Center>
								<Text fontSize={'2em'}>1</Text>
							</Center>
						</Circle>
					</NavLink>
					<NavLink to={'/use-cases/page/2'}>
						<Circle
							size={{ base: '3em', lg: '5em' }}
							bg={'blue'}
							_hover={{ bg: 'violet' }}
						>
							<Center>
								<Text fontSize={'2em'}>2</Text>
							</Center>
						</Circle>
					</NavLink>
				</Box>
				<Box
					ml={1}
					mt={'2em'}
					h={{ base: 267, lg: 367 }}
					w={'98.5vw'}
					bgGradient="linear(to-l, rgb(13,45,131), rgb(5,2,6), rgb(38,12,44))"
					display={'flex'}
					flexDir={'column'}
					justifyContent={'center'}
					alignItems={'center'}
					borderRadius={30}
				>
					<Text
						textAlign={'center'}
						mb={'1em'}
						fontSize={{ base: '2em', lg: '4em' }}
						fontWeight={600}
					>
						Bangun Kecerdasan Buatan Bisnis Anda Sendiri
					</Text>
					<MotionBox
						as={Button}
						width={{ lg: '23em' }}
						height={{ lg: '5em' }}
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
						<NavLink to={'/auth/signin'}>
							<Text
								textColor={'white'}
								fontSize={{ lg: 'x-large' }}
								fontWeight={700}
							>
								Mulai Gratis
							</Text>
						</NavLink>
					</MotionBox>
				</Box>
			</Stack>
			<FooterComponents />
		</>
	);
};

export default UseCasesPage;
