import NavBar from '../../Components/HeaderComponents';
import {
	Accordion,
	AccordionButton,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
	Divider,
	Flex,
	Icon,
	ListItem,
	SimpleGrid,
	Stack,
	Text,
	UnorderedList,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import FooterComponents from '../../Components/FooterComponents';
import { FaCheckCircle } from 'react-icons/fa';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
const PricingPage = () => {
	const MotionBox = motion(Box);

	const PrerimunFeatures = [
		'10,000 Credits',
		'GPT 3.5 16K',
		'GPT 4',
		'15 Users',
		'15 Bots',
		'10,000 Documents',
		'10,000 Website Pages',
		'Website Crawler',
		'Embed Website Widget (3 Websites)',
		'Customize Website Widget',
		'Remove Karyawan.AI Branding on Widget',
		'API',
	];

	const BasicFeatures = [
		'2,500 Credits',
		'GPT 3.5 16K',
		'3 Users',
		'3 Bots',
		'1,000 Documents',
		'Embed Website Widget',
		'Customize Website Widget',
		'API',
	];

	const AdvanceFeatures = [
		'25,000 Credits',
		'GPT 3.5 16K',
		'GPT 4',
		'50 Users',
		'50 Bots',
		'25,000 Documents',
		'25,000 Website Pages',
		'Website Crawler',
		'Embed Website Widget (50 Websites)',
		'Customize Website Widget',
		'Remove karyawan.AI Branding on Widget',
		'API',
	];
	return (
		<>
			<NavBar />
			<Stack w={'98.5vw'} mb={'5em'}>
				<Flex justifyContent={'center'} alignItems={'Center'}>
					<Flex
						mt={20}
						w={{ base: 300, md: 600, lg: 869 }}
						h={181}
						justifyContent={'center'}
						direction={'column'}
					>
						<Flex
							direction={'row'}
							justifyContent={'center'}
							alignItems={'center'}
						>
							<Text
								bgGradient="linear(to-l, #7928CA, #FF0080)"
								bgClip="text"
								fontSize={{ base: '3.5em', lg: '4.5em' }}
								fontWeight="bold"
								textAlign={'center'}
							>
								Get Started for Free
							</Text>
						</Flex>
						<Text textAlign={'center'}>
							Whether you’re using karyawan.AI for personal use, with a team, or plan
							to provide it to your clients we have a package for you.
						</Text>
					</Flex>
				</Flex>
				<Flex mt={'5em'} direction={'row'} justifyContent={'center'}>
					<SimpleGrid columns={{ base: 1, lg: 3 }} spacing={5}>
						<Box
							borderRadius={40}
							w={{ lg: 419 }}
							h={{ lg: 508 }}
							bgColor={'rgb(25,26,48)'}
							mr={3}
						>
							<Box mx={7} mt={'1em'} display={'flex'} flexDirection={'column'}>
								<Text fontSize={'1.35em'} fontWeight={600}>
									Karyawan
								</Text>
								<Text
									fontSize={'2.5em'}
									bgClip="text"
									bgGradient="linear(to-l, #7928CA, #FF0080)"
									fontWeight={600}
									mt={1}
								>
									300k/mo
								</Text>
								<Divider
									h={'0.1em'}
									mt={'2em'}
									bgGradient="linear(to-l, #7928CA, #FF0080)"
								/>
								<UnorderedList mt={'1em'} listStyleType={'none'}>
									{BasicFeatures.map((feature, index) => (
										<ListItem key={index}>
											<Flex gap={1}>
												<Box
													mt={1}
													borderRadius="5px"
													bgGradient={
														'linear(to-l, rgb(58,82,250), rgb(249,52,226))'
													}
													p="2"
													boxSize="25px"
													display="flex"
													alignItems="center"
													justifyContent="center"
												>
													<Icon as={FaCheckCircle} />
												</Box>
												<Box
													textColor={'gray.300'}
													fontSize={'1em'}
													fontWeight={500}
													ml={1}
													display={'flex'}
													alignItems={'center'}
												>
													{feature}
												</Box>
											</Flex>
										</ListItem>
									))}
								</UnorderedList>

								<Flex
									mt={'1em'}
									direction={'column'}
									justifyContent={'center'}
									alignItems={'center'}
									textColor={'white'}
								>
									<MotionBox
										as={Button}
										width={'17em'}
										height={'4em'}
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
												fontSize={'1.25em'}
												fontWeight={700}
											>
												Subscribe
											</Text>
										</NavLink>
									</MotionBox>
								</Flex>
							</Box>
						</Box>
						<Box
							borderRadius={40}
							w={{ lg: 419 }}
							h={{ lg: 618 }}
							bgColor={'rgb(25,26,48)'}
							mr={3}
						>
							<Box mx={7} mt={'1em'} display={'flex'} flexDirection={'column'}>
								<Text fontSize={'1.35em'} fontWeight={600}>
									Manager
								</Text>
								<Text
									fontSize={'2.5em'}
									bgClip="text"
									bgGradient="linear(to-l, #7928CA, #FF0080)"
									fontWeight={600}
									mt={1}
								>
									1000k/mo
								</Text>
								<Divider
									h={'0.1em'}
									mt={'2em'}
									bgGradient="linear(to-l, #7928CA, #FF0080)"
								/>
								<UnorderedList mt={'1em'} listStyleType={'none'}>
									{PrerimunFeatures.map((feature, index) => (
										<ListItem key={index}>
											<Flex gap={1}>
												<Box
													mt={1}
													borderRadius="5px"
													bgGradient={
														'linear(to-l, rgb(58,82,250), rgb(249,52,226))'
													}
													p="2"
													boxSize="25px"
													display="flex"
													alignItems="center"
													justifyContent="center"
												>
													<Icon as={FaCheckCircle} />
												</Box>
												<Box
													textColor={'gray.300'}
													fontSize={'1em'}
													fontWeight={500}
													ml={1}
													display={'flex'}
													alignItems={'center'}
												>
													{feature}
												</Box>
											</Flex>
										</ListItem>
									))}
								</UnorderedList>

								<Flex
									mt={'1em'}
									direction={'column'}
									justifyContent={'center'}
									alignItems={'center'}
									textColor={'white'}
								>
									<MotionBox
										as={Button}
										width={'17em'}
										height={'4em'}
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
												fontSize={'1.25em'}
												fontWeight={700}
											>
												Subscribe
											</Text>
										</NavLink>
									</MotionBox>
								</Flex>
							</Box>
						</Box>
						<Box
							borderRadius={40}
							w={{ lg: 419 }}
							h={{ lg: 618 }}
							bgColor={'rgb(25,26,48)'}
							mr={3}
						>
							<Box mx={7} mt={'1em'} display={'flex'} flexDirection={'column'}>
								<Text fontSize={'1.35em'} fontWeight={600}>
									Direktur
								</Text>
								<Text
									fontSize={'2.5em'}
									bgClip="text"
									bgGradient="linear(to-l, #7928CA, #FF0080)"
									fontWeight={600}
									mt={1}
								>
									7500k/mo
								</Text>
								<Divider
									h={'0.1em'}
									mt={'2em'}
									bgGradient="linear(to-l, #7928CA, #FF0080)"
								/>
								<UnorderedList mt={'1em'} listStyleType={'none'}>
									{AdvanceFeatures.map((feature, index) => (
										<ListItem key={index}>
											<Flex gap={1}>
												<Box
													mt={1}
													borderRadius="5px"
													bgGradient={
														'linear(to-l, rgb(58,82,250), rgb(249,52,226))'
													}
													p="2"
													boxSize="25px"
													display="flex"
													alignItems="center"
													justifyContent="center"
												>
													<Icon as={FaCheckCircle} />
												</Box>
												<Box
													textColor={'gray.300'}
													fontSize={'1em'}
													fontWeight={500}
													ml={1}
													display={'flex'}
													alignItems={'center'}
												>
													{feature}
												</Box>
											</Flex>
										</ListItem>
									))}
								</UnorderedList>

								<Flex
									mt={'1em'}
									direction={'column'}
									justifyContent={'center'}
									alignItems={'center'}
									textColor={'white'}
								>
									<MotionBox
										as={Button}
										width={'17em'}
										height={'4em'}
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
												fontSize={'1.25em'}
												fontWeight={700}
											>
												Subscribe
											</Text>
										</NavLink>
									</MotionBox>
								</Flex>
							</Box>
						</Box>
					</SimpleGrid>
				</Flex>

				<Stack mt={{ base: '3em', lg: '6em' }}>
					<Flex
						flexDir={'column'}
						justifyContent={'center'}
						alignItems={'center'}
					>
						<Text
							textAlign={'center'}
							fontSize={{ base: '2em', md: '3em', lg: '4em' }}
							fontWeight={550}
						>
							Pertanyaan yang Sering Diajukan
						</Text>
						<Box mt={'3em'} w={{ md: '35em', lg: '60em' }}>
							<Accordion allowMultiple>
								<AccordionItem
									border="2px"
									borderColor="violet"
									borderRadius={10}
								>
									{({ isExpanded }) => (
										<>
											<h2>
												<AccordionButton>
													<Box
														fontSize={'1.5em'}
														as="span"
														flex="1"
														textAlign="left"
													>
														Apa itu Karyawan.AI?
													</Box>
													{isExpanded ? (
														<Box color={'violet'}>
															<MinusIcon boxSize="1.5em" />
														</Box>
													) : (
														<Box color={'violet'}>
															<AddIcon boxSize="1.5em" />
														</Box>
													)}
												</AccordionButton>
											</h2>
											<AccordionPanel pb={4} borderRadius={30}>
												Karyawan.AI adalah karyawan virtual yang ditenagai oleh
												kecerdasan buatan (AI) yang dapat membantu bisnis Anda
												dalam berbagai tugas, seperti menjawab pertanyaan,
												menyelesaikan tugas, memperkenalkan karyawan baru,
												memberikan dukungan dan menyelesaikan masalah, serta
												memberikan ide dan wawasan baru.
											</AccordionPanel>
										</>
									)}
								</AccordionItem>
								<AccordionItem
									mt={4}
									border="2px"
									borderColor="violet"
									borderRadius={10}
								>
									{({ isExpanded }) => (
										<>
											<h2>
												<AccordionButton>
													<Box
														fontSize={'1.5em'}
														as="span"
														flex="1"
														textAlign="left"
													>
														Bagaimana Cara Kerja Karyawan.AI
													</Box>
													{isExpanded ? (
														<Box color={'violet'}>
															<MinusIcon boxSize="1.5em" />
														</Box>
													) : (
														<Box color={'violet'}>
															<AddIcon boxSize="1.5em" />
														</Box>
													)}
												</AccordionButton>
											</h2>
											<AccordionPanel pb={4} borderRadius={30}>
												Karyawan.AI mencari semua data perusahaan yang
												terakumulasi, termasuk artikel, PowerPoints, dan PDF,
												dan mengambil 10 dokumen paling relevan untuk membuat
												jawaban atas pertanyaan Anda dalam hitungan detik.
											</AccordionPanel>
										</>
									)}
								</AccordionItem>
								<AccordionItem
									mt={4}
									border="2px"
									borderColor="violet"
									borderRadius={10}
								>
									{({ isExpanded }) => (
										<>
											<h2>
												<AccordionButton>
													<Box
														fontSize={'1.5em'}
														as="span"
														flex="1"
														textAlign="left"
													>
														Apakah Saya Bisa Mengunggah Dokumen ke Karyawan.AI
													</Box>
													{isExpanded ? (
														<Box color={'violet'}>
															<MinusIcon boxSize="1.5em" />
														</Box>
													) : (
														<Box color={'violet'}>
															<AddIcon boxSize="1.5em" />
														</Box>
													)}
												</AccordionButton>
											</h2>
											<AccordionPanel pb={4} borderRadius={30}>
												Ya, Anda dapat mengunggah berbagai jenis dokumen ke
												karyawan.AI, seperti Word, PowerPoint, dan PDF, dan karyawan.AI akan
												segera mempelajari semua informasi tersebut dan
												menggunakannya untuk memberikan jawaban atas pertanyaan
												Anda.
											</AccordionPanel>
										</>
									)}
								</AccordionItem>
								<AccordionItem
									mt={4}
									border="2px"
									borderColor="violet"
									borderRadius={10}
								>
									{({ isExpanded }) => (
										<>
											<h2>
												<AccordionButton>
													<Box
														fontSize={'1.5em'}
														as="span"
														flex="1"
														textAlign="left"
													>
														Apa Itu Kredit?
													</Box>
													{isExpanded ? (
														<Box color={'violet'}>
															<MinusIcon boxSize="1.5em" />
														</Box>
													) : (
														<Box color={'violet'}>
															<AddIcon boxSize="1.5em" />
														</Box>
													)}
												</AccordionButton>
											</h2>
											<AccordionPanel pb={4} borderRadius={30}>
												<Box>
													<Text>Kredit mengukur penggunaan. Contohnya:</Text>
													<UnorderedList>
														<ListItem>
															Satu pertanyaan GPT-3.5 menggunakan 1 kredit.
														</ListItem>
														<ListItem>
															Sebuah pertanyaan GPT-3.5 16K membutuhkan 5
															kredit.
														</ListItem>
														<ListItem>
															Sebuah pertanyaan GPT-4 mengonsumsi 10 kredit.
														</ListItem>
													</UnorderedList>
													<Text>
														Anda dapat melacak penggunaan kredit Anda secara
														real-time di bawah tab penggunaan.
													</Text>
												</Box>
											</AccordionPanel>
										</>
									)}
								</AccordionItem>
								<AccordionItem
									mt={4}
									border="2px"
									borderColor="violet"
									borderRadius={10}
								>
									{({ isExpanded }) => (
										<>
											<h2>
												<AccordionButton>
													<Box
														fontSize={'1.5em'}
														as="span"
														flex="1"
														textAlign="left"
													>
														Bisakah saya Melatih Karyawan.AI dengan Proses
														Bisnis Spesifik Saya?
													</Box>
													{isExpanded ? (
														<Box color={'violet'}>
															<MinusIcon boxSize="1.5em" />
														</Box>
													) : (
														<Box color={'violet'}>
															<AddIcon boxSize="1.5em" />
														</Box>
													)}
												</AccordionButton>
											</h2>
											<AccordionPanel pb={4} borderRadius={30}>
												Iya, Anda bisa melatih karyawan.AI dengan proses bisnis
												spesifik Anda, seperti dokumentasi dukungan, sehingga
												tim Anda dapat dengan cepat menyelesaikan masalah apa
												pun.
											</AccordionPanel>
										</>
									)}
								</AccordionItem>
								<AccordionItem
									mt={4}
									border="2px"
									borderColor="violet"
									borderRadius={10}
								>
									{({ isExpanded }) => (
										<>
											<h2>
												<AccordionButton>
													<Box
														fontSize={'1.5em'}
														as="span"
														flex="1"
														textAlign="left"
													>
														Apakah Karyawan.AI Menggantikan Karyawan Manusia?
													</Box>
													{isExpanded ? (
														<Box color={'violet'}>
															<MinusIcon boxSize="1.5em" />
														</Box>
													) : (
														<Box color={'violet'}>
															<AddIcon boxSize="1.5em" />
														</Box>
													)}
												</AccordionButton>
											</h2>
											<AccordionPanel pb={4} borderRadius={30}>
												Tidak, Karyawan.AI bukan pengganti untuk karyawan
												manusia. Sebaliknya, dirancang untuk membantu dan
												memperkuat tim Anda, memungkinkan mereka fokus pada
												tugas-tugas yang lebih penting dan bekerja dengan lebih
												efisien.
											</AccordionPanel>
										</>
									)}
								</AccordionItem>
							</Accordion>
						</Box>
					</Flex>
				</Stack>
				<Box
					mb={'1em'}
					mt={'8em'}
					h={{ base: 450, lg: 400 }}
					w={'100vw'}
					bgGradient="linear(to-l, rgb(13,45,131), rgb(5,2,6), rgb(38,12,44))"
					display={'flex'}
					flexDir={'column'}
					justifyContent={'center'}
					alignItems={'center'}
					borderRadius={30}
				>
					<Text
						mb={'1em'}
						fontSize={{ base: '2em', md: '2.5em', lg: '3.5em' }}
						fontWeight={600}
						textAlign={'center'}
					>
						Memberdayakan Tim Anda dengan Kecerdasan Buatan
					</Text>
					<Text
						textAlign={'center'}
						mb={'1em'}
						fontSize={'1.2em'}
						textColor={'gray.500'}
					>
						Receive 250 credits per month, 100 documents & a free widget for
						your website.
					</Text>
					<MotionBox
						as={Button}
						width={{ lg: '23em' }}
						height={{ lg: '4.5em' }}
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
							<Text textColor={'white'} fontSize={'x-large'} fontWeight={600}>
								Build Your Custom AI
							</Text>
						</NavLink>
					</MotionBox>
				</Box>
			</Stack>
			<FooterComponents />
		</>
	);
};

export default PricingPage;
