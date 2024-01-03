import {
	Box,
	Button,
	Flex,
	Image,
	Input,
	SimpleGrid,
	Stack,
	Text,
	Textarea,
} from '@chakra-ui/react';
import NavBar from '../../Components/HeaderComponents';
import { motion } from 'framer-motion';
import FooterComponents from '../../Components/FooterComponents';

const EnterprisePage = () => {
	const MotionBox = motion(Box);
	return (
		<>
			<NavBar />
			<Stack w={{ lg: '98vw' }} mb={'5em'} bgColor={'rgb(18,19,36)'}>
				<Flex justifyContent={'center'} alignItems={'Center'}>
					<Flex
						mt={'9em'}
						w={{ base: 250,md: 600, lg: 869 }}
						h={181}
						justifyContent={'center'}
						direction={'column'}
					>
						<Flex
							direction={'row'}
							justifyContent={'center'}
							alignItems={'center'}
							textAlign={'center'}
						>
							<Text
								bgGradient="linear(to-l, #FFD460, #FFA500)"
								bgClip="text"
								fontSize={{ base: '2.2em', lg: '4.5em' }}
								fontWeight="bold"
							>
								Solusi Kecerdasan Buatan untuk Perusahaan
							</Text>
						</Flex>
						<Text textAlign={'center'} fontSize={{ base: '0.7em', md:'1em' }}>
							Buka potensi teknologi AI canggih untuk mengubah bisnis Anda
							dengan Solusi Kecerdasan Buatan Enterprise kami di Karyawan AI.
							Bayangkan dapat membangun hampir semua aset digital hanya dengan
							memberikan instruksi dalam bahasa alami. Model Bahasa Besar (LLM)
							seperti Falcon, Llama 2, Claud 2, GPT-4, dan PaLM telah
							menunjukkan kinerja yang mengesankan pada tugas-tugas tersebut,
							memungkinkan solusi cerdas mirip manusia yang tidak tergantung
							pada platform, dapat disesuaikan, dan memprioritaskan privasi data
							dengan keamanan berbasis peran tambahan. Dengan memanfaatkan
							teknologi AI terkini, kami dapat membantu bisnis Anda mencapai
							tingkat efisiensi dan inovasi yang tak tertandingi.
						</Text>
					</Flex>
				</Flex>
				<Flex ml={5} mt={'5em'} direction={'row'} justifyContent={'center'}>
					<SimpleGrid columns={{ base: 1, lg: 3 }} spacing={5}>
						<Box
							mt={{ base: '6em', lg: '0em' }}
							display={'flex'}
							flexDirection={'column'}
							justifyContent={'center'}
							mr={3}
							borderRadius={40}
							h={{ lg: 553 }}
						>
							<Image
								boxSize={'6em'}
								src="https://meetcody.ai/wp-content/uploads/2023/05/enterprise-section_1-img_1-updated.svg"
							/>
							<Text fontSize={'1.5em'} fontWeight={600} mt={5}>
								Efisiensi dan Produktivitas yang Ditingkatkan
							</Text>
							<Text textAlign={'start'} mt={5} h={{ lg: 127 }} w={{ lg: 424 }}>
								Solusi Karyawan AI meningkatkan efisiensi dan produktivitas dengan
								otomatisasi tugas dan penyederhanaan proses. Model AI kami
								menganalisis data, menghasilkan wawasan, dan memberikan
								rekomendasi, memungkinkan tim Anda fokus pada inisiatif
								strategis.
							</Text>
							<Flex
								mt={{ lg: '2em' }}
								direction={'column'}
								justifyContent={'center'}
								alignItems={'center'}
								textColor={'white'}
							></Flex>
						</Box>
						<Box
							display={'flex'}
							flexDirection={'column'}
							justifyContent={'center'}
							mr={3}
							borderRadius={40}
							h={{ lg: 553 }}
						>
							<Image
								boxSize={'6em'}
								src="https://meetcody.ai/wp-content/uploads/2023/05/enterprise-section_1-img_2-updated.svg"
							/>
							<Text fontSize={'1.5em'} fontWeight={600} mt={5}>
								Solusi AI yang Disesuaikan untuk Kebutuhan Enterprise yang Unik
							</Text>
							<Text textAlign={'start'} mt={5} h={{ lg: 127 }} w={{ lg: 424 }}>
								Kami menyediakan model dan solusi AI yang disesuaikan untuk
								mengatasi kebutuhan bisnis Anda yang spesifik dan terintegrasi
								dengan lancar ke dalam sistem yang sudah ada. Kolaborasi kami
								memastikan bahwa solusi AI kami beradaptasi dengan lanskap
								enterprise yang terus berkembang.
							</Text>
							<Flex
								mt={'2em'}
								direction={'column'}
								justifyContent={'center'}
								alignItems={'center'}
								textColor={'white'}
							></Flex>
						</Box>
						<Box
							display={'flex'}
							flexDirection={'column'}
							justifyContent={'center'}
							mr={3}
							borderRadius={40}
							h={{ lg: 553 }}
						>
							<Image
								boxSize={'6em'}
								src="https://meetcody.ai/wp-content/uploads/2023/05/home-section_3-icon_1.svg"
							/>
							<Text fontSize={'1.5em'} fontWeight={600} mt={5}>
								Keahlian dan Dukungan Sepanjang Perjalanan AI
							</Text>
							<Text textAlign={'start'} mt={5} h={{ lg: 127 }} w={{ lg: 424 }}>
								Solusi AI enterprise kami menyeluruh mencakup konsultasi,
								pengembangan, pengujian, otomatisasi, implementasi, dan
								peningkatan kapasitas. Tim ahli AI kami juga menawarkan
								pelatihan dan implementasi praktik terbaik untuk membantu tim
								Anda memanfaatkan teknologi AI secara efektif dan tetap
								bersaing.
							</Text>
							<Flex
								mt={'2em'}
								direction={'column'}
								justifyContent={'center'}
								alignItems={'center'}
								textColor={'white'}
							></Flex>
						</Box>
					</SimpleGrid>
				</Flex>
				<Box
					w={'98vw'}
					h={{ base: '280vh',md:'160vh', lg: '120vh' }}
					borderRadius={'1em'}
					bgColor={'rgb(31,32,61)'}
				>
					<Flex
						direction={'column'}
						alignItems={'center'}
						justifyContent={'center'}
					>
						<Text
							mt={'1em'}
							fontSize={{ base: '1.5em', md: '2.5', lg: '3em' }}
							fontWeight={600}
							textAlign={'center'}
						>
							Karyawan AI sebagai Pilihan untuk Solusi Kecerdasan Buatan Enterprise
						</Text>
						<Text
							textAlign={'center'}
							fontSize={{ lg: '1.25em' }}
							mt={'2em'}
							w={{ base: '17em', lg: '50em' }}
						>
							Tim ahli AI kami di Karyawan AI memiliki pengalaman yang luas bekerja
							dengan lebih dari 1.000 bisnis dan dapat membantu bisnis Anda
							memanfaatkan kekuatan teknologi AI canggih. Kami menawarkan:
						</Text>
						<SimpleGrid columns={{ base: 1, md: 2 }} mt={{base:'2em',lg:'6em'}}>
							<Box ml={'2em'} w={{ base: '17em', lg: '629px' }}>
								<Flex direction={'column'} textAlign={{base: 'center', md:'start'}}>
									<Flex flexDir={'column'}>
										<Text fontSize={'1.5em'} fontWeight={600}>
											Strategi Keberhasilan Terbukti untuk Perusahaan
										</Text>
										<Text mt={3} fontSize={{ lg: '1.25em' }}>
											Kami dapat membantu Anda mengintegrasikan model AI ke
											dalam alat dan proses yang sudah ada untuk meningkatkan
											produktivitas dan kolaborasi dengan keamanan sebagai
											prioritas utama.
										</Text>
									</Flex>
									<Flex mt={{base:'2em'}} flexDir={'column'}>
										<Text fontSize={'1.5em'} fontWeight={600}>
											Solusi yang Ekonomis
										</Text>
										<Text mt={3} fontSize={{ lg: '1.25em' }}>
											Kami dapat membantu Anda mengurangi biaya yang terkait
											dengan penggunaan model AI dengan menerapkan model yang
											tepat untuk tugas tertentu dan mengoptimalkannya untuk
											tugas-tugas individu.
										</Text>
									</Flex>
								</Flex>
							</Box>
							<Box ml={'2em'} mt={{base:'2em',md:'0em' }} w={{ base: '17em', lg: '629px' }}>
								<Flex direction={'column'} textAlign={{base: 'center', md:'start'}}>
									<Flex flexDir={'column'}>
										<Text fontSize={'1.5em'} fontWeight={600}>
											Model Disesuaikan untuk Akurasi yang Ditingkatkan
										</Text>
										<Text mt={3} fontSize={{ lg: '1.25em' }}>
											Tim kami dapat membangun model AI yang disesuaikan
											berdasarkan domain dan kebutuhan bisnis Anda, baik dengan
											memperluas model OpenAI atau menggunakan model sumber
											terbuka yang telah dilatih sebelumnya.
										</Text>
									</Flex>
									<Flex mt={{base:'2em'}} flexDir={'column'}>
										<Text fontSize={'1.5em'} fontWeight={600}>
											Solusi AI dari Awal hingga Akhir
										</Text>
										<Text mt={3} fontSize={'1.15em'}>
											Kami menyediakan berbagai solusi AI enterprise lengkap,
											mulai dari konsultasi awal hingga pengembangan, pengujian,
											otomatisasi, implementasi, dan peningkatan kapasitas dalam
											lingkungan on-premises, multi-cloud, atau hibrid.
										</Text>
									</Flex>
								</Flex>
							</Box>
						</SimpleGrid>
					</Flex>
				</Box>
				<Box
					mt={'5em'}
					w={'98vw'}
					h={{ base: '190vh', lg: '120vh' }}
					borderRadius={'1em'}
					bgColor={'rgb(31,32,61)'}
				>
					<Flex
						direction={'column'}
						alignItems={'center'}
						justifyContent={'center'}
					>
						<Text
							mt={'1.5em'}
							fontSize={{ base: '2em', lg: '2.75em' }}
							fontWeight={600}
							textAlign={'center'}
						>
							Mulailah Perjalanan Transformasi AI Anda
						</Text>
						<Text
							textAlign={'center'}
							mt={{ base: '2em', lg: '3em' }}
							w={{ base: '17em', lg: '40em' }}
						>
							Hubungi kami hari ini untuk mempelajari lebih lanjut tentang
							Solusi Kecerdasan Buatan Enterprise kami di Karyawan AI dan temukan
							bagaimana kami dapat membantu bisnis Anda berkembang di era AI.
						</Text>
						<Flex direction={'column'}>
							<SimpleGrid mt={'5em'} columns={{ base: 1, lg: 2 }}>
								<Box display={'flex'} flexDir={'column'} gap={6}>
									<Input
										w={{ lg: 629 }}
										placeholder="Full Name*"
										outlineColor={'violet'}
										borderRadius={30}
										_placeholder={{
											opacity: 1,
											color: 'white',
											fontSize: 15,
											fontWeight: 500,
										}}
									/>
									<Input
										w={{ lg: 629 }}
										placeholder="Company Name"
										outlineColor={'violet'}
										borderRadius={30}
										_placeholder={{
											opacity: 1,
											color: 'white',
											fontSize: 15,
											fontWeight: 500,
										}}
									/>
									<Input
										w={{ lg: 629 }}
										placeholder="Team Size"
										outlineColor={'violet'}
										borderRadius={30}
										_placeholder={{
											opacity: 1,
											color: 'white',
											fontSize: 15,
											fontWeight: 500,
										}}
									/>
								</Box>
								<Box
									mt={{ base: 6, lg: 0 }}
									ml={{ lg: 5 }}
									display={'flex'}
									flexDir={'column'}
									gap={6}
								>
									<Input
										w={{ lg: 629 }}
										placeholder="Email*"
										outlineColor={'violet'}
										borderRadius={30}
										_placeholder={{
											opacity: 1,
											color: 'white',
											fontSize: 15,
											fontWeight: 500,
										}}
									/>
									<Input
										w={{ lg: 629 }}
										placeholder="Company Name"
										outlineColor={'violet'}
										borderRadius={30}
										_placeholder={{
											opacity: 1,
											color: 'white',
											fontSize: 15,
											fontWeight: 500,
										}}
									/>
									<Input
										w={{ lg: 629 }}
										placeholder="Website"
										outlineColor={'violet'}
										borderRadius={30}
										_placeholder={{
											opacity: 1,
											color: 'white',
											fontSize: 15,
											fontWeight: 500,
										}}
									/>
								</Box>
							</SimpleGrid>
							<Box mt={5} w={{ lg: '80.90em' }}>
								<Textarea
									h={'10em'}
									borderRadius={20}
									borderColor={'violet'}
									placeholder="Tell us about your use case..."
									_placeholder={{
										opacity: 1,
										color: 'white',
										fontSize: 15,
										fontWeight: 500,
									}}
								/>
							</Box>
							<Flex mt={5} justifyContent={'center'}>
								<MotionBox
									as={Button}
									width={'10em'}
									height={'3.5em'}
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
									<Text
										textColor={'white'}
										fontSize={'1.25em'}
										fontWeight={700}
									>
										Kirim
									</Text>
								</MotionBox>
							</Flex>
						</Flex>
					</Flex>
				</Box>
			</Stack>
			<FooterComponents />
		</>
	);
};

export default EnterprisePage;
