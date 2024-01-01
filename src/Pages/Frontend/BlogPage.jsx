
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
const BlogPage = () => {
	const MotionBox = motion(Box);
	return (
		<>
			<NavBar />
			<Stack w={'98.5vw'} mb={'5em'}>
				<Flex justifyContent={'center'} alignItems={'Center'}>
					<Flex
						mt={{ lg: 20 }}
						w={{ xl: 869 }}
						h={{ xl: 181 }}
						justifyContent={'center'}
						direction={'column'}
					>
						<Flex
							direction={{ base: 'column', md: 'row' }}
							justifyContent={'center'}
							alignItems={'center'}
						>
							<Text
								bgGradient="linear(to-l, #7928CA, #FF0080)"
								bgClip="text"
								fontSize={{ base: '3em', lg: '4.5em' }}
								fontWeight="bold"
								frg
							>
								Dari Kami
							</Text>
							<Text
								ml={5}
								fontSize={{ base: '3em', lg: '4.5em' }}
								fontWeight="bold"
								textColor={'rgb(180,188,208)'}
							>
								Blog
							</Text>
						</Flex>
						<Text textAlign={'center'}>
							Temukan kekuatan Business AI melalui blog AI kami yang menarik, di
							mana kami mengungkapkan perkembangan terbaru, inovasi, dan
							strategi untuk memanfaatkan kecerdasan buatan guna merevolusi
							operasional bisnis Anda dan tetap unggul di pasar yang kompetitif.
						</Text>
					</Flex>
				</Flex>
				<Flex mt={'5em'} direction={'row'} justifyContent={'center'}>
					<SimpleGrid columns={{ base: 1, lg: 2 }} spacing={5}>
						<Box
							ml={5}
							display={'flex'}
							flexDirection={'column'}
							alignItems={'center'}
							justifyContent={'start'}
							bgColor={'rgb(31,32,60)'}
							mr={3}
							borderRadius={40}
							w={{ xl: 600 }}
							h={{ xl: 842 }}
						>
							<Image
								borderTopRadius={40}
								src="https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/12/chatgpt-alternatives-custom-704x345.png.webp"
							/>
							<Text
								textAlign={'center'}
								w={{ xl: '16em' }}
								fontSize={{ base: '1.5em', lg: '2em' }}
								textColor={'gray.400'}
								fontWeight={600}
								mt={'2.5em'}
							>
								Top 10 Alternatif ChatGPT Kustom untuk Tahun 2024
							</Text>
							<Text
								textAlign={'center'}
								mt={5}
								h={{ xl: 127 }}
								w={{ xl: 424 }}
								fontSize={{ xl: '1.1em' }}
								textColor={'gray.400'}
							>
								Bosan dengan ratusan saran yang membahas alternatif ChatGPT
								kustom? Berikut adalah daftar eksklusif dari alternatif teratas
								untuk ChatGPT beserta kekuatan unik masing-masing. But first…
							</Text>
							<Flex
								mt={'2em'}
								mb={{ base: '1em', lg: '0em' }}
								direction={'column'}
								justifyContent={'center'}
								alignItems={'center'}
								textColor={'white'}
							>
								<MotionBox
									as={Button}
									width={{ xl: '23em' }}
									height={{ xl: '5em' }}
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
									<NavLink to={'/login'}>
										<Text
											textColor={'white'}
											fontSize={'x-large'}
											fontWeight={700}
										>
											Read More
										</Text>
									</NavLink>
								</MotionBox>
							</Flex>
						</Box>
						<Box
							ml={5}
							display={'flex'}
							flexDirection={'column'}
							alignItems={'center'}
							justifyContent={'start'}
							bgColor={'rgb(31,32,60)'}
							mr={3}
							borderRadius={40}
							w={{ xl: 600 }}
							h={{ xl: 842 }}
						>
							<Image
								borderTopRadius={40}
								src="https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/12/gpt-4-vs-claude-2.1-704x345.png.webp"
							/>
							<Text
								textAlign={'center'}
								w={{ xl: '16em' }}
								fontSize={{ base: '1.5em', xl: '2em' }}
								textColor={'gray.400'}
								fontWeight={600}
								mt={'2.5em'}
							>
								GPT-4 Turbo vs Claude 2.1: Panduan dan Perbandingan Definitif
							</Text>
							<Text
								textAlign={'center'}
								mt={5}
								h={{ xl: 127 }}
								w={{ xl: 424 }}
								fontSize={{ xl: '1.1em' }}
								textColor={'gray.400'}
							>
								Hari ini, ketika kita berpikir tentang kecerdasan buatan, dua
								chatbot utama yang terlintas dalam pikiran kita adalah GPT-4
								Turbo oleh OpenAI dan Claude 2.1 oleh Anthropic. Namun, siapakah
								pemenang pertarungan GPT-4 Turbo vs Claude 2.1? Mari kita
								katakan Anda memilih seorang superhero untuk tim...
							</Text>
							<Flex
								mt={'2em'}
								mb={{ base: '1em', lg: '0em' }}
								direction={'column'}
								justifyContent={'center'}
								alignItems={'center'}
								textColor={'white'}
							>
								<MotionBox
									as={Button}
									width={{ xl: '23em' }}
									height={{ xl: '5em' }}
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
									<NavLink to={'/login'}>
										<Text
											textColor={'white'}
											fontSize={'x-large'}
											fontWeight={700}
										>
											Read More
										</Text>
									</NavLink>
								</MotionBox>
							</Flex>
						</Box>
						<Box
							ml={5}
							display={'flex'}
							flexDirection={'column'}
							alignItems={'center'}
							justifyContent={'start'}
							bgColor={'rgb(31,32,60)'}
							mr={3}
							borderRadius={40}
							w={{ xl: 600 }}
							h={{ xl: 842 }}
						>
							<Image
								borderTopRadius={40}
								src="https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/12/Vector-databases-2024-704x345.png.webp"
							/>
							<Text
								textAlign={'center'}
								w={{ lg: '16em' }}
								fontSize={{ base: '1.5em', xl: '2em' }}
								textColor={'gray.400'}
								fontWeight={600}
								mt={'2.5em'}
							>
								Top 5 Database Vektor yang Harus Dicoba pada Tahun 2024
							</Text>
							<Text
								textAlign={'center'}
								mt={5}
								h={{ xl: 127 }}
								w={{ lg: 424 }}
								fontSize={{ lg: '1.1em' }}
								textColor={'gray.400'}
							>
								Database vektor, juga disebut sebagai database tervektorisasi
								atau penyimpanan vektor, merupakan kategori database khusus yang
								dirancang untuk penyimpanan dan pengambilan vektor berdimensi
								tinggi secara efisien. Dalam konteks database, vektor
								menunjukkan entitas...
							</Text>
							<Flex
								mt={'2em'}
								mb={{ base: '1em', lg: '0em' }}
								direction={'column'}
								justifyContent={'center'}
								alignItems={'center'}
								textColor={'white'}
							>
								<MotionBox
									as={Button}
									width={{ xl: '23em' }}
									height={{ xl: '5em' }}
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
									<NavLink to={'/login'}>
										<Text
											textColor={'white'}
											fontSize={'x-large'}
											fontWeight={700}
										>
											Read More
										</Text>
									</NavLink>
								</MotionBox>
							</Flex>
						</Box>
						<Box
							ml={5}
							display={'flex'}
							flexDirection={'column'}
							alignItems={'center'}
							justifyContent={'start'}
							bgColor={'rgb(31,32,60)'}
							mr={3}
							borderRadius={40}
							w={{ xl: 600 }}
							h={{ xl: 842 }}
						>
							<Image
								borderTopRadius={40}
								src="https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/12/Googles-Gemini-Ultra-Pro-and-Nano-704x345.png.webp"
							/>
							<Text
								textAlign={'center'}
								w={{ xl: '16em' }}
								fontSize={{ base: '1.5em', xl: '2em' }}
								textColor={'gray.400'}
								fontWeight={600}
								mt={'2.5em'}
							>
								Google Memperkenalkan Model Multimodal Gemini Ultra, Pro, & Nano
							</Text>
							<Text
								textAlign={'center'}
								mt={5}
								h={{ xl: 127 }}
								w={{ xl: 424 }}
								fontSize={{ lg: '1.1em' }}
								textColor={'gray.400'}
							>
								Google baru-baru ini mengungkapkan model AI terobosan mereka,
								Gemini, yang dianggap sebagai peluncuran paling substansial dan
								mampu hingga saat ini. Demis Hassabis, Co-Founder dan CEO Google
								DeepMind, membagikan wawasan tentang Gemini, menekankan
								temuannya yang multimodal...
							</Text>
							<Flex
								mt={'2em'}
								mb={{ base: '1em', lg: '0em' }}
								direction={'column'}
								justifyContent={'center'}
								alignItems={'center'}
								textColor={'white'}
							>
								<MotionBox
									as={Button}
									width={{ xl: '23em' }}
									height={{ xl: '5em' }}
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
									<NavLink to={'/login'}>
										<Text
											textColor={'white'}
											fontSize={'x-large'}
											fontWeight={700}
										>
											Read More
										</Text>
									</NavLink>
								</MotionBox>
							</Flex>
						</Box>
						<Box
							ml={5}
							display={'flex'}
							flexDirection={'column'}
							alignItems={'center'}
							justifyContent={'start'}
							bgColor={'rgb(31,32,60)'}
							mr={3}
							borderRadius={40}
							w={{ xl: 600 }}
							h={{ xl: 842 }}
						>
							<Image
								borderTopRadius={40}
								src="https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/12/ai-copywriting-tools-704x345.png.webp"
							/>
							<Text
								textAlign={'center'}
								w={{ xl: '16em' }}
								fontSize={{ base: '1.5em', lg: '2em' }}
								textColor={'gray.400'}
								fontWeight={600}
								mt={'2.5em'}
							>
								Kumpulan Ultimate Alat Copywriting AI Anda untuk Tahun 2024
							</Text>
							<Text
								textAlign={'center'}
								mt={5}
								h={{ xl: 127 }}
								w={{ xl: 424 }}
								fontSize={{ lg: '1.1em' }}
								textColor={'gray.400'}
							>
								Lebih dari setengah pemimpin bisnis, sekitar 52%, sudah
								memanfaatkan dengan baik alat copywriting AI untuk meningkatkan
								strategi pemasaran kontennya. Yang cukup mencolok adalah tren AI
								tidak terbatas pada jenis bisnis tertentu, karena baik bisnis...
							</Text>
							<Flex
								mt={'2em'}
								mb={{ base: '1em', lg: '0em' }}
								direction={'column'}
								justifyContent={'center'}
								alignItems={'center'}
								textColor={'white'}
							>
								<MotionBox
									as={Button}
									width={{ xl: '23em' }}
									height={{ xl: '5em' }}
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
									<NavLink to={'/login'}>
										<Text
											textColor={'white'}
											fontSize={'x-large'}
											fontWeight={700}
										>
											Read More
										</Text>
									</NavLink>
								</MotionBox>
							</Flex>
						</Box>
						<Box
							ml={5}
							display={'flex'}
							flexDirection={'column'}
							alignItems={'center'}
							justifyContent={'start'}
							bgColor={'rgb(31,32,60)'}
							mr={3}
							borderRadius={40}
							w={{ xl: 600 }}
							h={{ xl: 842 }}
						>
							<Image
								borderTopRadius={40}
								src="https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/12/social-media-ai-prompts-704x345.png.webp"
							/>
							<Text
								textAlign={'center'}
								w={{ xl: '16em' }}
								fontSize={{ base: '1.5em', xl: '2em' }}
								textColor={'gray.400'}
								fontWeight={600}
								mt={'2.5em'}
							>
								Top 16 Pemompa AI Media Sosial pada Tahun 2024
							</Text>
							<Text
								textAlign={'center'}
								mt={5}
								h={{ xl: 127 }}
								w={{ xl: 424 }}
								fontSize={{ lg: '1.1em' }}
								textColor={'gray.400'}
							>
								Tim media sosial yang bertugas menarik perhatian audiens dapat
								membuat pemompa AI media sosial untuk menyederhanakan dan
								meningkatkan proses kreatif mereka. 3. Gunakan contoh untuk
								mengilustrasikan hasil yang diinginkan. Ini akan membantu AI
								memahami gaya dan preferensi Anda...
							</Text>
							<Flex
								mt={'2em'}
								mb={{ base: '1em', lg: '0em' }}
								direction={'column'}
								justifyContent={'center'}
								alignItems={'center'}
								textColor={'white'}
							>
								<MotionBox
									as={Button}
									width={{ xl: '23em' }}
									height={{ xl: '5em' }}
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
									<NavLink to={'/login'}>
										<Text
											textColor={'white'}
											fontSize={'x-large'}
											fontWeight={700}
										>
											Read More
										</Text>
									</NavLink>
								</MotionBox>
							</Flex>
						</Box>
					</SimpleGrid>
				</Flex>
				<Box gap={3} display={'flex'} mt={'4em'} justifyContent={'center'}>
					<Circle size={{ base: '3em', lg: '5em' }} bg={'violet'}>
						<Center>
							<Text fontSize={'2em'}>1</Text>
						</Center>
					</Circle>
					<Circle
						size={{ base: '3em', lg: '5em' }}
						bg={'blue.600'}
						_hover={{ bg: 'violet' }}
					>
						<Center>
							<Text fontSize={'2em'}>2</Text>
						</Center>
					</Circle>
					<Circle
						size={{ base: '3em', lg: '5em' }}
						bg={'blue.600'}
						_hover={{ bg: 'violet' }}
					>
						<Center>
							<Text fontSize={'2em'}>3</Text>
						</Center>
					</Circle>
					<Text display={'flex'} alignItems={'end'}>
						.....
					</Text>
					<Circle
						size={{ base: '3em', lg: '5em' }}
						bg={'blue.600'}
						_hover={{ bg: 'violet' }}
					>
						<Center>
							<Text fontSize={'2em'}>14</Text>
						</Center>
					</Circle>
				</Box>
				<Box
					mt={{ base: '5em', lg: '10em' }}
					mb={{ lg: '6em' }}
					h={367}
					w={'98.5vw'}
					bgGradient="linear(to-l, rgb(13,45,131), rgb(5,2,6), rgb(38,12,44))"
					display={'flex'}
					flexDir={'column'}
					justifyContent={'center'}
					alignItems={'center'}
					borderRadius={30}
				>
					<Text
						mb={'1em'}
						fontSize={{ base: '2.5em', md: '3em', lg: '4em' }}
						fontWeight={600}
						textAlign={'center'}
					>
						Bangun Kecerdasan Buatan Bisnis Anda Sendiri
					</Text>
					<MotionBox
						as={Button}
						width={{ xl: '23em' }}
						height={{ xl: '5em' }}
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
							<Text textColor={'white'} fontSize={'x-large'} fontWeight={700}>
								Get Started Free
							</Text>
						</NavLink>
					</MotionBox>
				</Box>
			</Stack>
			<FooterComponents />
		</>
	);
};

export default BlogPage;
