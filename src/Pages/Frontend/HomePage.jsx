
import {
	Accordion,
	AccordionButton,
	AccordionItem,
	AccordionPanel,
	AspectRatio,
	Box,
	Button,
	Center,
	Divider,
	Flex,
	Image,
	ListItem,
	SimpleGrid,
	Stack,
	Text,
	UnorderedList,
} from '@chakra-ui/react';
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import NavBar from '../../Components/HeaderComponents';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AddIcon, ArrowForwardIcon, MinusIcon } from '@chakra-ui/icons';
import FooterComponents from '../../Components/FooterComponents';
const HomePage = () => {
	const [images, setimages] = useState(
		'https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/05/Warstwa-10.png.webp'
	);
	const [text, setText] = useState(
		'Upload files or import content using URLs to provide your chatbot with the essential knowledge to serve its purpose effectively.'
	);

	const MotionBox = motion(Box);

	// For set Image in section
	const handleTeach = () => {
		setimages(
			'https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/05/Warstwa-10.png.webp'
		);
		setText(
			'Upload files or import content using URLs to provide your chatbot with the essential knowledge to serve its purpose effectively.'
		);
	};
	const handleCustomize = () => {
		setimages(
			'https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/05/home-section_4-img_2_with_border.png.webp'
		);
		setText(
			'Set up specialized chatbots for various tasks by tailoring their roles, strictness, and other settings for an enhanced user experience.'
		);
	};
	const handleShare = () => {
		setimages(
			'https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/05/home-section_4-img_3_with_border.png.webp'
		);
		setText(
			'Seamlessly integrate your chatbot with a shareable link, inline embed, or popup embed, ensuring easy access for your employees or customers.'
		);
	};
	const handleAsk = () => {
		setimages(
			'https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/05/home-section_4-img_4_with_border.png.webp'
		);
		setText(
			'Interact with your chatbot by simply asking questions on the chat screen to instantly receive accurate and relevant answers.'
		);
	};

	return (
		<>
			<NavBar />
			<Stack width={'98.5vw'} bgColor={'rgb(18,19,37)'}>
				<Flex
					direction={'column'}
					mt={{ base: '1em', lg: '3.5em' }}
					justifyContent={'center'}
					alignItems={'center'}
				>
					<Box
						fontSize={{ base: '2.45em', lg: '6em' }}
						textColor={'gray.400'}
						fontWeight={625}
						textAlign={'center'}
					>
						Asisten AI Anda
						<Center>Untuk Bisnis</Center>
					</Box>
					<Flex
						mt={'2em'}
						direction={'column'}
						justifyContent={'center'}
						alignItems={'center'}
						textColor={'white'}
					>
						<MotionBox
							as={Button}
							width={{ base: '', lg: '18em' }}
							height={{ lg: '3.8em' }}
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
								<Text
									textColor={'white'}
									fontSize={{ lg: '1.25em' }}
									fontWeight={600}
								>
									Mulai Gratis
								</Text>
							</NavLink>
						</MotionBox>
						<Text fontSize={{ lg: '1.1em' }} textColor={'gray'}>
							Tidak Memerlukan Kartu Kredit
						</Text>
					</Flex>
				</Flex>
				<center>
					<Box mt={{ base: '2em', lg: '5em' }} ml={1}>
						<AspectRatio
							maxW={{ base: '17em', md: '30em', lg: '65em' }}
							ratio={16 / 9}
						>
							<iframe
								title="introduction"
								src="https://player.vimeo.com/video/848412865"
							/>
						</AspectRatio>
					</Box>
				</center>

				<Box mt={{ base: '1em', lg: '10em' }}>
					<Flex direction={'column'} alignItems={'center'}>
						<Text
							mb={'0.75em'}
							textAlign={'center'}
							fontSize={{ base: '2em', lg: '3.5em' }}
							fontWeight={500}
						>
							Apa itu karyawan.Ai
						</Text>
						<Text
							w={{ base: '20em', lg: '35em' }}
							textAlign={'center'}
							fontSize={{ base: '0.75em', lg: '1.25em' }}
							mx={'0.25em'}
							textColor={'rgb(170,172,186)'}
						>
							Karyawan.Ai adalah asisten AI cerdas seperti ChatGPT – dengan
							keuntungan tambahan dapat melatihnya pada bisnis Anda, tim Anda,
							proses Anda, dan klien Anda dengan basis pengetahuan Anda sendiri.
							Gunakan karyawan.ai sebagai karyawan untuk mendukung tim Anda,
							menjawab pertanyaan, membantu dalam pekerjaan kreatif,
							menyelesaikan masalah, dan merumuskan ide.
						</Text>
						<Flex
							mt={'3.5em'}
							direction={'column'}
							gap={'1.5em'}
							alignItems={'center'}
						>
							<Button
								borderRadius={100}
								h={{ base: '2.5em', lg: '4em' }}
								borderColor={'var(--wp--preset--color--pale-pink)'}
								_hover={{ borderColor: 'var(--wp--preset--color--pale-pink)' }}
							>
								<Box
									display={'flex'}
									alignItems={'center'}
									gap={'0.5em'}
									mx={{ lg: '1em' }}
								>
									<Image src="https://meetcody.ai/wp-content/uploads/2023/05/cross-icon.svg" />
									<Text fontSize={{ base: '0.6em', lg: '1.5em' }}>
										Tidak ada pencarian kata kunci
									</Text>
								</Box>
							</Button>
							<Button
								borderRadius={100}
								h={{ base: '2.5em', lg: '4em' }}
								borderColor={'var(--wp--preset--color--pale-pink)'}
								_hover={{ borderColor: 'var(--wp--preset--color--pale-pink)' }}
							>
								<Box
									display={'flex'}
									alignItems={'center'}
									gap={'0.5em'}
									mx={{ lg: '1em' }}
								>
									<Image src="https://meetcody.ai/wp-content/uploads/2023/05/cross-icon.svg" />
									<Text fontSize={{ base: '0.6em', lg: '1.5em' }}>
										Tidak ada jawaban yang diulang-ulang
									</Text>
								</Box>
							</Button>
							<Button
								borderRadius={100}
								h={{ base: '2.5em', lg: '4em' }}
								borderColor={'var(--wp--preset--color--pale-pink)'}
								_hover={{ borderColor: 'var(--wp--preset--color--pale-pink)' }}
							>
								<Box
									display={'flex'}
									alignItems={'center'}
									gap={'0.5em'}
									mx={{ lg: '1em' }}
								>
									<Image src="https://meetcody.ai/wp-content/uploads/2023/05/cross-icon.svg" />
									<Text fontSize={{ base: '0.6em', lg: '1.5em' }}>
										Tidak perlu memberikan konteks setiap kali
									</Text>
								</Box>
							</Button>
						</Flex>
					</Flex>
				</Box>
				<Stack ml={1}>
					<Flex
						mt={{ base: '3em', xl: '9em' }}
						direction={'column'}
						borderRadius={'1em'}
						bg={'rgb(32,33,61)'}
						w={'full'}
						textAlign={'center'}
						alignItems={'center'}
					>
						<Text
							mt={'1em'}
							fontSize={{ base: '1.75em', lg: '3.5em' }}
							fontWeight={500}
							textAlign={'center'}
						>
							Karyawan.AI bisa melakukan apa?
						</Text>
						<SimpleGrid
							columns={{ base: 1, lg: 3 }}
							ml={{ lg: '3em' }}
							gap={{ lg: '3em' }}
							mt={{ base: '1em', lg: '7em' }}
						>
							<Flex
								gap={5}
								direction={'column'}
								w={{ xl: 387 }}
								h={{ xl: 363 }}
								alignItems={'center'}
							>
								<Image
									boxSize={'5em'}
									src="https://meetcody.ai/wp-content/uploads/2023/05/home-section_3-icon_1.svg"
								/>
								<Text fontSize={{ base: 15, md: 18, xl: 20 }} fontWeight={700}>
									Jawaban Instan untuk Pertanyaan Bisnis Anda
								</Text>
								<Text fontSize={{ base: 10, md: 15, xl: 18 }}>
									Tidak perlu melacak manual atau menyisir dokumen tanpa henti.
									Karyawan.AI menganalisis semua dokumen yang terakumulasi dan berperan
									sebagai ahli pada semua proses perusahaan Anda untuk
									memberikan jawaban yang Anda butuhkan dalam hitungan detik.
								</Text>
							</Flex>
							<Flex
								mt={{ base: '1.5em', lg: '0em' }}
								gap={5}
								direction={'column'}
								w={{ xl: 387 }}
								h={{ xl: 363 }}
								alignItems={'center'}
							>
								<Image
									boxSize={'5em'}
									src="https://meetcody.ai/wp-content/uploads/2023/05/home-section_3-icon_2.svg"
								/>
								<Text fontSize={{ base: 15, md: 18, xl: 20 }} fontWeight={700}>
									Unggah Semua Data dan Bangun Basis Pengetahuan Anda
								</Text>
								<Text fontSize={{ base: 10, md: 15, xl: 18 }}>
									Unggah dengan aman berbagai jenis file, mulai dari PowerPoints
									hingga PDF, atau menjelajahi seluruh situs web untuk segera
									mengintegrasikan informasi dan menyesuaikan karyawan.AI untuk
									perusahaan Anda. karyawan.AI akan mencari dalam basis data Anda dan
									menggunakannya untuk menyusun respons pintar.
								</Text>
							</Flex>
							<Flex
								mt={{ base: '1.5em', lg: '0em' }}
								gap={5}
								direction={'column'}
								w={{ xl: 387 }}
								h={{ xl: 363 }}
								alignItems={'center'}
							>
								<Image
									boxSize={'5em'}
									src="https://meetcody.ai/wp-content/uploads/2023/05/home-section_3-icon_3.svg"
								/>
								<Text fontSize={{ base: 15, md: 18, xl: 20 }} fontWeight={700}>
									Berikan Sumber untuk Setiap Jawaban
								</Text>
								<Text fontSize={{ base: 10, md: 15, xl: 18 }}>
									Untuk ketenangan pikiran tambahan, Anda dapat memeriksa hasil
									kerja Karyawan.AI. Baik itu berasal dari satu sumber atau beberapa
									sumber, Karyawan.AI memberikan informasi tentang sumber yang
									digunakan untuk setiap jawaban.
								</Text>
							</Flex>
						</SimpleGrid>
						<Divider />

						<SimpleGrid
							columns={{ base: 1, lg: 3 }}
							mt={'2em'}
							ml={{ lg: '3em' }}
							gap={'3em'}
						>
							<Flex
								gap={5}
								direction={'column'}
								w={{ xl: 387 }}
								h={{ xl: 363 }}
								alignItems={'center'}
							>
								<Image
									boxSize={'5em'}
									src="https://meetcody.ai/wp-content/uploads/2023/05/home-section_3-icon_4.svg"
								/>
								<Text fontSize={{ base: 15, md: 18, xl: 20 }} fontWeight={700}>
									Meningkatkan Efisiensi Karyawan
								</Text>
								<Text fontSize={{ base: 10, md: 15, xl: 18 }}>
									Dengan jawaban instan, ide, dan pekerjaan yang sudah siap, tim
									Anda dapat bekerja lebih cerdas, bukan lebih keras. Gunakan
									karyawan.AI untuk menyelesaikan tugas dengan lebih cepat, seperti
									menulis email profesional, menerjemahkan dokumen, atau membuat
									materi pemasaran.
								</Text>
							</Flex>
							<Flex
								gap={5}
								direction={'column'}
								w={{ xl: 387 }}
								h={{ xl: 363 }}
								alignItems={'center'}
							>
								<Image
									boxSize={'5em'}
									src="https://meetcody.ai/wp-content/uploads/2023/05/home-section_3-icon_5.svg"
								/>
								<Text fontSize={{ base: 15, md: 18, xl: 20 }} fontWeight={700}>
									Memberikan Dukungan & Menyelesaikan Masalah
								</Text>
								<Text fontSize={{ base: 10, md: 15, xl: 18 }}>
									Tidak menggunakan sepenuhnya alat digital Anda? Tidak bisa
									mendapatkan suara berfungsi di Zoom? karyawan.AI menggunakan
									dokumentasi dukungan untuk membantu tim Anda dengan cepat
									menyelesaikan masalah apa pun dan menemukan fitur tersembunyi.
								</Text>
							</Flex>
							<Flex
								gap={5}
								direction={'column'}
								w={{ xl: 387 }}
								h={{ xl: 363 }}
								alignItems={'center'}
								mb={{ base: '1em', lg: '0em' }}
							>
								<Image
									boxSize={'5em'}
									src="https://meetcody.ai/wp-content/uploads/2023/05/home-section_3-icon_6.svg"
								/>
								<Text fontSize={{ base: 15, md: 18, xl: 20 }} fontWeight={700}>
									Menghasilkan Ide dan Memberikan Saran
								</Text>
								<Text fontSize={{ base: 10, md: 15, xl: 18 }}>
									Jika Anda tidak yakin dari mana memulai, Anda dapat
									menggunakan karyawan.AI untuk membawa perspektif dan wawasan baru ke
									meja. Karena karyawan.AI mengingat percakapan dan sejarah
									kontekstual, ia dapat memberikan ide dan saran.
								</Text>
							</Flex>
						</SimpleGrid>
					</Flex>
				</Stack>
				<Stack display={{ base: 'none', lg: 'block' }} mt={'3em'} mb={'6em'}>
					<Flex
						direction={'column'}
						justifyContent={'center'}
						alignItems={'center'}
					>
						<Text
							mt={'1em'}
							mb={'1em'}
							fontSize={{ base: '2em', md: '2.5em', lg: '3.5em' }}
							fontWeight={500}
							textAlign={'center'}
						>
							Bagaimana Cara Kerjanya
						</Text>
						<SimpleGrid columns={{ base: 1, xl: 2 }}>
							<Box w={{ lg: 644 }} h={{ lg: 563 }}>
								<Flex
									mt={'2.5em'}
									direction={'column'}
									gap={'1.5em'}
									alignItems={'center'}
								>
									<Button
										onClick={handleTeach}
										w={{ lg: '36em' }}
										rightIcon={<ArrowForwardIcon />}
										borderRadius={100}
										h={{ lg: '4em' }}
										borderColor={'var(--wp--preset--color--pale-pink)'}
										_hover={{
											borderColor: 'var(--wp--preset--color--pale-pink)',
										}}
										justifyContent={'space-around'}
									>
										<Box display={'flex'} gap={'0.5em'} mx={{ LG: '1em' }}>
											<Image
												boxSize={{ base: '1em', lg: '2.5em' }}
												src="https://meetcody.ai/wp-content/uploads/2023/12/home-section_4-icon_1.svg"
											/>
											<Text
												display={'flex'}
												alignItems={'center'}
												fontSize={{ base: '0.75em', lg: '1em' }}
											>
												Ajarkan Apa yang Perlu Diketahui
											</Text>
										</Box>
									</Button>
									<Button
										onClick={handleCustomize}
										w={'36em'}
										rightIcon={<ArrowForwardIcon />}
										borderRadius={100}
										h={'4em'}
										borderColor={'var(--wp--preset--color--pale-pink)'}
										_hover={{
											borderColor: 'var(--wp--preset--color--pale-pink)',
										}}
										justifyContent={'space-around'}
									>
										<Box display={'flex'} gap={'0.5em'} mx={'1em'}>
											<Image
												boxSize={{ base: '1em', lg: '2.5em' }}
												src="https://meetcody.ai/wp-content/uploads/2023/12/home-section_4-icon_2.svg"
											/>
											<Text
												display={'flex'}
												alignItems={'center'}
												fontSize={{ base: '0.75em', lg: '1em' }}
											>
												Kustomisasi Karyawan.ai untuk Penggunaan yang Berbeda
											</Text>
										</Box>
									</Button>
									<Button
										onClick={handleShare}
										w={'36em'}
										rightIcon={<ArrowForwardIcon />}
										borderRadius={100}
										h={'4em'}
										borderColor={'var(--wp--preset--color--pale-pink)'}
										_hover={{
											borderColor: 'var(--wp--preset--color--pale-pink)',
										}}
										justifyContent={'space-around'}
									>
										<Box display={'flex'} gap={'0.5em'} mx={'1em'}>
											<Image
												boxSize={{ base: '1em', lg: '2.5em' }}
												src="https://meetcody.ai/wp-content/uploads/2023/12/home-section_4-icon_3.svg"
											/>
											<Text
												display={'flex'}
												alignItems={'center'}
												fontSize={{ base: '0.75em', lg: '1em' }}
											>
												Bagikan Karyawan.ai dengan Tim atau Pelanggan Anda
											</Text>
										</Box>
									</Button>
									<Button
										onClick={handleAsk}
										w={'36em'}
										rightIcon={<ArrowForwardIcon />}
										borderRadius={100}
										h={'4em'}
										borderColor={'var(--wp--preset--color--pale-pink)'}
										_hover={{
											borderColor: 'var(--wp--preset--color--pale-pink)',
										}}
									>
										<Box display={'flex'} gap={'0.5em'} mx={'1em'}>
											<Image
												boxSize={{ base: '1em', lg: '2.5em' }}
												src="https://meetcody.ai/wp-content/uploads/2023/12/home-section_4-icon_4.svg"
											/>
											<Text
												display={'flex'}
												alignItems={'center'}
												fontSize={{ base: '0.75em', lg: '1em' }}
											>
												Tanya Karyawan.AI
											</Text>
										</Box>
									</Button>
								</Flex>
							</Box>
							<Flex
								direction={'column'}
								textAlign={'center'}
								justifyContent={'center'}
								alignItems={'center'}
								w={644}
								h={563}
							>
								<Box w={590} h={456} borderRadius={20}>
									<Image src={images} />
								</Box>
								<Text>{text}</Text>
							</Flex>
						</SimpleGrid>
					</Flex>
				</Stack>
				<Stack mt={'3em'} w={'98.5vw'} h={{ base: '80vh', xl: '100vh' }}>
					<Flex
						direction={'column'}
						justifyContent={'center'}
						alignItems={'center'}
					>
						<Text fontSize={{ base: '2.25em', lg: '4em' }} textAlign={'center'}>
							Bekerja dalam Setiap Bahasa
						</Text>
						<Text
							mb={'6em'}
							mt={{ base: '2em', lg: '3em' }}
							fontSize={{ base: '1em', lg: '2.5em' }}
							textAlign={'center'}
						>
							Bangun dan interaksikan informasi Anda dalam setiap bahasa,
							memberdayakan pengguna untuk terhubung dan berkolaborasi secara
							global.
						</Text>
						<Flex gap={6} justifyContent={'center'}>
							<Image
								display={{ base: 'none', sm: 'none', md: 'none' }}
								boxSize={70}
								src="https://meetcody.ai/wp-content/uploads/2023/06/home-section_5-icon_1.svg"
							/>
							<Image
								display={{ base: 'none', sm: 'block' }}
								boxSize={70}
								src="https://meetcody.ai/wp-content/uploads/2023/06/home-section_5-icon_2.svg"
							/>
							<Image
								display={{ base: 'none', sm: 'block' }}
								boxSize={70}
								src="https://meetcody.ai/wp-content/uploads/2023/06/home-section_5-icon_3.svg"
							/>
							<Image
								display={{ base: 'none', sm: 'block' }}
								boxSize={70}
								src="https://meetcody.ai/wp-content/uploads/2023/06/home-section_5-icon_4.svg"
							/>
							<Image
								display={{ base: 'none', sm: 'block' }}
								boxSize={70}
								src="https://meetcody.ai/wp-content/uploads/2023/06/home-section_5-icon_5.svg"
							/>
							<Image
								display={{ base: 'none', sm: 'block' }}
								boxSize={70}
								src="https://meetcody.ai/wp-content/uploads/2023/06/home-section_5-icon_6.svg"
							/>
							<Image
								display={{ base: 'none', sm: 'block' }}
								boxSize={70}
								src="https://meetcody.ai/wp-content/uploads/2023/06/home-section_5-icon_7.svg"
							/>
							<Image
								display={{ base: 'none', sm: 'block' }}
								boxSize={70}
								src="https://meetcody.ai/wp-content/uploads/2023/06/home-section_5-icon_8.svg"
							/>
							<Image
								display={{ base: 'none', sm: 'block' }}
								boxSize={70}
								src="https://meetcody.ai/wp-content/uploads/2023/06/home-section_5-icon_9.svg"
							/>
							<Image
								display={{ base: 'none', sm: 'block' }}
								boxSize={70}
								src="https://meetcody.ai/wp-content/uploads/2023/06/home-section_5-icon_10.svg"
							/>
							<Image
								display={{ sm: 'none', md: 'block' }}
								boxSize={70}
								src="https://meetcody.ai/wp-content/uploads/2023/06/home-section_5-icon_11.svg"
							/>
							<Image
								boxSize={70}
								src="https://meetcody.ai/wp-content/uploads/2023/06/home-section_5-icon_12.svg"
							/>
							<Image
								boxSize={70}
								src="https://meetcody.ai/wp-content/uploads/2023/06/home-section_5-icon_13.svg"
							/>
						</Flex>
					</Flex>
				</Stack>
				<Stack ml={1} mt={{ lg: '3em' }}>
					<Box borderRadius={'1em'} bgColor={'rgb(31,32,61)'}>
						<Flex
							direction={'column'}
							alignItems={'center'}
							justifyContent={'center'}
							textAlign={'center'}
						>
							<Text
								mt={'1em'}
								fontSize={{ base: '1em', lg: '3em' }}
								fontWeight={600}
							>
								Integrasi dengan Alat Favorit Anda
							</Text>
							<Text mt={{ base: '1em', lg: '2em' }}>
								Integrasikan karyawan.AI ke aplikasi favorit Anda melalui API yang kuat
								kami, memungkinkan Anda memanfaatkan potensi penuh pengetahuan
								Anda di mana saja.
							</Text>
							<SimpleGrid columns={{ base: 1, lg: 3 }} mt={'6em'} mb={'3em'}>
								<Box>
									<Flex direction={'column'}>
										<Flex justifyContent={'space-around'}>
											<Flex direction={'column'} alignItems={'center'} gap={3}>
												<Image src="https://meetcody.ai/wp-content/uploads/2023/05/home-section_5-icon_1-updated.png" />
												<Text fontSize={'1.5em'}>PPT</Text>
											</Flex>
											<Flex direction={'column'} alignItems={'center'} gap={3}>
												<Image src="https://meetcody.ai/wp-content/uploads/2023/05/home-section_5-icon_4-updated.png" />
												<Text fontSize={'1.5em'}>DocX</Text>
											</Flex>
										</Flex>
										<Flex
											direction={'column'}
											alignItems={'center'}
											justifyContent={'center'}
										>
											<Image src="https://meetcody.ai/wp-content/uploads/2023/05/home-section_5-icon_5-updated.png" />
											<Text fontSize={'1.5em'}>Website</Text>
										</Flex>

										<Flex justifyContent={'space-around'}>
											<Flex direction={'column'} alignItems={'center'} gap={3}>
												<Image src="https://meetcody.ai/wp-content/uploads/2023/05/home-section_5-icon_2-updated.png" />
												<Text fontSize={'1.5em'}>Media</Text>
											</Flex>
											<Flex direction={'column'} alignItems={'center'} gap={3}>
												<Image src="https://meetcody.ai/wp-content/uploads/2023/08/pdf-active.png" />
												<Text fontSize={'1.5em'}>PDF</Text>
											</Flex>
										</Flex>
									</Flex>
								</Box>
								<Box>
									<Flex
										mt={'5em'}
										mb={{ base: '5em' }}
										justifyContent={'center'}
										alignItems={'center'}
									>
										<Image
											boxSize={{ base: '15em' }}
											src="https://meetcody.ai/wp-content/uploads/2023/04/home-section_5-icon_11-updated.png"
										/>
									</Flex>
								</Box>

								<Box>
									<Flex direction={'column'}>
										<Flex justifyContent={'space-around'}>
											<Flex direction={'column'} alignItems={'center'} gap={3}>
												<Image src="https://meetcody.ai/wp-content/uploads/2023/05/home-section_5-icon_1-updated.png" />
												<Text fontSize={'1.5em'}>PPT</Text>
											</Flex>
											<Flex direction={'column'} alignItems={'center'} gap={3}>
												<Image src="https://meetcody.ai/wp-content/uploads/2023/05/home-section_5-icon_4-updated.png" />
												<Text fontSize={'1.5em'}>DocX</Text>
											</Flex>
										</Flex>
										<Flex
											direction={'column'}
											alignItems={'center'}
											justifyContent={'center'}
										>
											<Image src="https://meetcody.ai/wp-content/uploads/2023/05/home-section_5-icon_5-updated.png" />
											<Text fontSize={'1.5em'}>Website</Text>
										</Flex>

										<Flex justifyContent={'space-around'}>
											<Flex direction={'column'} alignItems={'center'} gap={3}>
												<Image src="https://meetcody.ai/wp-content/uploads/2023/05/home-section_5-icon_2-updated.png" />
												<Text fontSize={'1.5em'}>Media</Text>
											</Flex>
											<Flex direction={'column'} alignItems={'center'} gap={3}>
												<Image src="https://meetcody.ai/wp-content/uploads/2023/08/pdf-active.png" />
												<Text fontSize={'1.5em'}>PDF</Text>
											</Flex>
										</Flex>
									</Flex>
								</Box>
							</SimpleGrid>
						</Flex>
					</Box>
				</Stack>
				<Stack mt={{ base: '3em', lg: '5em' }}>
					<Flex
						direction={'column'}
						justifyContent={'center'}
						alignItems={'center'}
						textAlign={'center'}
					>
						<Text
							fontSize={{ base: '2em', lg: '3em' }}
							fontWeight={600}
							mt={'1em'}
						>
							Dipercayai oleh Lebih dari 100.000 Bisnis
						</Text>
						<Box w={{ lg: 869 }} h={{ lg: 51 }}>
							<Text mt={'1em'}>
								Percayalah pada perlindungan data yang tak tertandingi dari
								Karyawan.AI sambil memanfaatkan platform kami untuk penyimpanan
								dokumen yang mulus dan kolaborasi. Rasakan keseimbangan sempurna
								antara keamanan tanpa kompromi dan pengalaman pengguna yang luar
								biasa.
							</Text>
						</Box>
						<SimpleGrid columns={{ base: 1, lg: 3 }} mt={{ lg: 20 }} gap={5}>
							<Flex
								mt={{ base: '6em', lg: '0em' }}
								direction={'column'}
								justifyContent={'center'}
								alignItems={'center'}
								w={{ xl: 410 }}
								h={{ xl: 370 }}
								bgColor={'rgb(30,31,59)'}
								borderRadius={'3em'}
							>
								<Image
									mt={{ base: '1em', md: '0em' }}
									boxSize={'5em'}
									src="https://meetcody.ai/wp-content/uploads/2023/05/home-section_3-icon_1.svg"
								/>
								<Text mt={3} fontSize={'1.5em'} fontWeight={600}>
									Pertahanan Data Lanjutan
								</Text>
								<Text mb={{ base: '1em', md: '0em' }} mt={4} mx={4}>
									Lindungi data Anda dengan enkripsi AWS yang tangguh dari Karyawan
									AI dan standar privasi basis data SOC II. Nikmati lingkungan
									yang aman yang menempatkan privasi Anda sebagai prioritas
									tanpa mengorbankan efisiensi dan fleksibilitas.
								</Text>
							</Flex>
							<Flex
								direction={'column'}
								justifyContent={'center'}
								alignItems={'center'}
								w={{ xl: 410 }}
								h={{ xl: 370 }}
								bgColor={'rgb(30,31,59)'}
								borderRadius={'3em'}
							>
								<Image
									mt={{ base: '1em', md: '0em' }}
									boxSize={'5em'}
									src="https://meetcody.ai/wp-content/uploads/2023/05/home-section_3-icon_2.svg"
								/>
								<Text mt={3} fontSize={'1.5em'} fontWeight={600}>
									Kontrol Akses yang Dapat Disesuaikan
								</Text>
								<Text mb={{ base: '1em', md: '0em' }} mt={4} mx={4}>
									Jaga kendali mutlak atas data Anda dengan penegakan izin Karyawan
									AI. Platform kami memberikan akses berdasarkan chatbot
									tertentu, memastikan bahwa pengguna hanya dapat mengakses
									informasi yang mereka berwenang lihat, dengan pembaruan izin
									secara real-time.
								</Text>
							</Flex>
							<Flex
								direction={'column'}
								justifyContent={'center'}
								alignItems={'center'}
								w={{ xl: 410 }}
								h={{ xl: 370 }}
								bgColor={'rgb(30,31,59)'}
								borderRadius={'3em'}
							>
								<Image
									mt={{ base: '1em', md: '0em' }}
									boxSize={'5em'}
									src="https://meetcody.ai/wp-content/uploads/2023/05/home-section_3-icon_3.svg"
								/>
								<Text mt={3} fontSize={'1.5em'} fontWeight={600}>
									Komitmen Yang Tak Goyah Terhadap Keamanan
								</Text>
								<Text mt={4} mb={{ base: '1em', md: '0em' }} mx={5}>
									Tenanglah mengetahui bahwa data Anda berada di tangan yang
									mampu. Kami mematuhi standar keamanan pihak ketiga yang ketat
									dan terus berupaya meningkatkan langkah-langkah kami untuk
									memberikan perlindungan luar biasa yang disesuaikan dengan
									kebutuhan Anda.
								</Text>
							</Flex>
						</SimpleGrid>
					</Flex>
				</Stack>
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
						<Box mt={'3em'} w={{ md: '35em', xl: '60em' }}>
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
												Karyawan.AI, seperti Word, PowerPoint, dan PDF, dan karyawan.AI akan
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
					mt={{ base: '1em', lg: '8em' }}
					mb={{ base: '1em', lg: '8em' }}
					h={{ lg: 367 }}
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
						fontSize={{ base: '1.5em', lg: '4em' }}
						fontWeight={600}
						textAlign={'center'}
					>
						Memberdayakan Tim Anda dengan Kecerdasan Buatan
					</Text>
					<MotionBox
						mb={'1em'}
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
						<NavLink to={'/auth/signup'}>
							<Text textColor={'white'} fontSize={'x-large'} fontWeight={700}>
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

export default HomePage;
