import {
	Box,
	Button,
	Flex,
	Image,
	Link,
	Stack,
	VStack,
	Text,
	Icon,
	useDisclosure,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerBody,
	Circle,
	ButtonGroup,
	Center,
	Spacer,
	Wrap,
	Square,
	AspectRatio,
	Divider,
	UnorderedList,
	ListItem,
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
    keyframes,
    SimpleGrid,
    Card,
    CardBody,
    Heading,
    CardFooter,
    CardHeader,
    Avatar,
    IconButton,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
import { BsThreeDotsVertical, BsTwitterX } from 'react-icons/bs';
import { motion } from 'framer-motion';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { FaDiscord, FaGithub, FaLinkedin, FaLinkedinIn } from 'react-icons/fa6';
import { AiOutlineLike } from "react-icons/ai"
import { IoChatboxOutline } from "react-icons/io5";
import { FaRegShareSquare } from "react-icons/fa";
const FlowiseCom = () => {
	const tabData = [
		{
			label: 'Product Catalog',
			content:
				'Product catalog chatbot to answer any questions related to the products',
			image:
				'https://flowiseai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproductcatalog.9d6b9124.png&w=1920&q=75',
		},
		{
			label: 'Product Description',
			content: 'Generate product description from given product specifications',
			image:
				'https://flowiseai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproductcatalog.9d6b9124.png&w=1920&q=75',
		},
		{
			label: 'Query SQL Database',
			content: 'Using natural language to query SQL database',
			image:
				'https://flowiseai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsqlquery.3bcd4ed6.png&w=1920&q=75',
		},
		{
			label: 'Customer Support',
			content:
				'Summarize and create follow up tasks from customer support tickets',
			image:
				'https://flowiseai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcustomersupport.f169773c.png&w=1920&q=75',
		},
		{
			label: 'Structured Data',
			content:
				'Generate or extract structured data to be used for downstream tasks',
			image:
				'https://flowiseai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstructuredata.04b4342f.png&w=1920&q=75',
		},
	];

    const communityVideo = [
        {
            title:'Flowise AI Tutorial #1 - Introduction & Setup',
            image:'https://www.youtube.com/embed/tD6fwQyUIJE',
        },
        {
            title:'How to Build an AI Document Chatbot in 10 Minutes',
            image:'https://www.youtube.com/embed/riXpu1tHzl0' 
        },
        {    title:'Flowise is an open source no-code UI visual tool to build 🦜🔗LangChain applications',
            image:'https://www.youtube.com/embed/CovAPtQPU0k' 
        },
        {    title:'Flowise: No Code ChatBot Building Platform: LangChain',
            image:'https://www.youtube.com/embed/Q7_dKkosJY4' 
        },
        { title:'Build a No-Code Chat-with-PDF LangChain app using Flowise and Bubble',
            image:'https://www.youtube.com/embed/kOwmPe8aLAA' 
        },
        { title:'Flowise AI: Create LLM Apps with NO Code - FREE Opensource LangChain Apps',
            image:'https://www.youtube.com/embed/tD6fwQyUIJEhttps://www.youtube.com/embed/kvvBUz0q-6I' 
        },
    ]

    const imageLogo = [
        {
            image: 'https://flowiseai.com/_next/static/media/aws.c9a4034b.svg'
        },
        {
            image: 'https://flowiseai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Falibaba.d717abe3.png&w=128&q=75'
        },
        {
            image: 'https://flowiseai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhitachi.cc8b5524.png&w=64&q=75'
        },
        {
            image: 'https://flowiseai.com/_next/static/media/ByteDance.cfa75bfd.svg'
        },
        {
            image: 'https://flowiseai.com/_next/static/media/microsoft.0e14c6cf.svg'
        },
        {
            image: 'https://flowiseai.com/_next/static/media/insightsoftware.c5783e21.svg'
        },
        {
            image: 'https://flowiseai.com/_next/static/media/google.c43e43a7.svg'
        },
        {
            image: 'https://flowiseai.com/_next/static/media/accenture.3222125e.svg'
        },
        {
            image: 'https://flowiseai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Feroad.ea8bab6e.png&w=64&q=75'
        },
    ]

    const animationKeyFrames = keyframes`
        from {
            transform: translateX(0)
        }
        to {
            transform: translateX(-100%)
        }`
    const animation = `${animationKeyFrames} 10s infinite linear`;

    const twitterComment = [
        {
            name: 'Segun Adebayo',
            icon: 'https://bit.ly/sage-adebayo',
            job: 'Creator, Chakra UI',
            image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            content: 'With Chakra UI, I wanted to sync the speed of development with the speed of design. I wanted the developer to be just as excited as the designer to create a screen.',
            imageContent:'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        },
        {
            name: 'Dan Abrahmov',
            icon: 'https://bit.ly/dan-abramov',
            job: 'Creator, Chakra UI',
            image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            content: 'With Chakra UI, I wanted to sync the speed of development with the speed of design. I wanted the developer to be just as excited as the designer to create a screen.',
            imageContent:'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        },
        {
            name: 'Kola Tioluwani',
            icon: 'https://bit.ly/ryan-florence',
            job: 'Creator, Chakra UI',
            image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            content: 'With Chakra UI, I wanted to sync the speed of development with the speed of design. I wanted the developer to be just as excited as the designer to create a screen.',
            imageContent:'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        },
        {
            name: 'Prosper Otemuyiwa',
            icon: 'https://bit.ly/prosper-baba',
            job: 'Creator, Chakra UI',
            image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            content: 'With Chakra UI, I wanted to sync the speed of development with the speed of design. I wanted the developer to be just as excited as the designer to create a screen.',
            imageContent:'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        },
    ]
	return (
		<Stack bgColor={'rgb(21,23,25)'}>
            <Stack mx={'6em'}>
			<Flex
				justifyContent={'space-between'}
				height={'80px'}
                alignItems={'center'}
			>
				<Center>
					<Image
						w={'10em'}
						h={'2.9em'}
						src="https://deoapp-bucket.s3.ap-southeast-1.amazonaws.com/img-fzl/2.png"
					/>
				</Center>
				<Flex display={{ base: 'none', md: 'block' }}>
					<Center>
						<ButtonGroup variant={'none'} textColor={'white'} fontSize={5}>
							<Button fontSize={14}>Features</Button>
							<Button fontSize={14}>Use Cases</Button>
							<Button fontSize={14}>Community</Button>
							<Button fontSize={14}>Webinars</Button>
							<Button fontSize={14}>Docs</Button>
							<Button
								variant={'blue'}
								rounded={'full'}
								bgGradient="linear(to-r, #5F3EBD, #2861E8)"
								leftIcon={<AiFillGithub />}
							>
								Github
							</Button>
						</ButtonGroup>
					</Center>
				</Flex>
			</Flex>
			<Stack mt={'5em'}>
				<Flex
					direction={{ base: 'column', md: 'row' }}
					justifyContent={'center'}
					alignItems={'center'}
					fontSize={{ base: '1.5em',md: '2em', lg: '2.5em' }}
					fontWeight="bold"
					color={'white'}
					gap={'0.25em'}
				>
					<Text>Build LLM Apps</Text>
					<Text bgGradient="linear(to-l, #FFD460, #FFA500)" bgClip="text">
						Easily
					</Text>
				</Flex>
				<Text
					textAlign={'center'}
					fontSize={{ base: '0.9em', md: '1em', lg:'1.1em' }}
					textColor={'gray.500'}
                    mt={'1em'}
				>
					Open source UI visual tool to build your customized LLM ochestration
					flow & AI agents
				</Text>
				<ButtonGroup
                    mt={'0.75em'}
					display={'flex'}
					flexDirection={{ base: 'column', md: 'row' }}
					gap={'0.5em'}
					justifyContent={'center'}
					alignItems={'center'}
				>
					<Button
						w={'9em'}
						variant={'blue'}
						rounded={'full'}
						bgGradient="linear(to-r, #5F3EBD, #2861E8)"
						leftIcon={<AiFillGithub />}
						textColor={'white'}
					>
						Git Hub{' '}
					</Button>
					<Button rounded={'full'} w={'9em'}>
						Go to Docs
					</Button>
				</ButtonGroup>
				<Text
					mt={'0.25em'}
					display={'flex'}
					justifyContent={'center'}
					gap={3}
					fontSize={'1em'}
					textColor={'gray.500'}
				>
					Basked by{' '}
					<Square bgColor={'orange'} textColor={'white'} size={7}>
						Y
					</Square>{' '}
					Combinator
				</Text>
			</Stack>
			<center>
				<Box mt={{ base: '2em', lg: '5em' }} ml={1}>
					<AspectRatio
						maxW={{ base: '25em', md: '30em', lg: '65em' }}
						ratio={16 / 9}
					>
						<iframe
							title="introduction"
							src="https://flowiseai.com/videos/intro.mp4"
						/>
					</AspectRatio>
				</Box>
			</center>
			<Text

				mt={'2em'}
				display={'flex'}
				justifyContent={'center'}
				fontSize={'1.1em'}
				textColor={'gray.500'}
			>
				Trusted and used by teams around the globe
			</Text>
            <Box overflow={'hidden'} justifyContent={'center'} p={"60px"} mx={'5em'}>
                <Flex display={'inline-flex'}  gap={10} whiteSpace={'nowrap'} animation={animation} >
                    {imageLogo.map((x,i) => (
                        <Image h={'1.5em'}  src={x.image}/>
                    ))}
                    {imageLogo.map((x,i) => (
                        <Image h={'1.5em'}  src={x.image}/>
                    ))}
                </Flex>
            </Box>
			<Divider colorScheme='gray' h={0.3}  />
			<Flex mt={'5em'} direction={'column'} textColor={'#98A6B0'} fontWeight={500} alignItems={'center'} textAlign={'center'}>
				<Text textColor={'white'} fontSize={['1em', '1.5em', '2.75em']} fontWeight={700}>Iterate, fast</Text>
				<Text mt={'0.5em'} w={'35em'} >
					Developing LLM apps takes countless iterations. With low code
					approach, we enable quick iterations to go from testing to production
				</Text>

				<Flex borderRadius={10} mt={'2.5em'} bgColor={'gray.900'} h={'5.5em'} w={'14em'} direction={'column'} alignItems={'center'} justifyContent={'center'} textColor={'gray.300'} fontWeight={600}>
					<Text>$ npm install -g flowise</Text>
					<Text>$ npx flowise start</Text>
				</Flex>
				<Button mt={'2em'} rounded={'full'} bgColor={'gray.700'} textColor={'white'}>
					Get Started
				</Button>
			</Flex>
			<Flex mt={'5em'} direction={{ base: 'column-reverse', md: 'row' }} gap={'3em'}>
				<Box w={'30em'} display={'flex'} flexDirection={'column'} textColor={'white'} justifyContent={'center'} gap={'0.25em'}>
					<Text textColor={'blue.600'}>Chatflow</Text>
					<Text fontSize={'1.8em'} fontWeight={'700'}>LLM Ochestration</Text>
					<Text textColor={'gray.400'} fontWeight={600}>
						Connect LLMs with memory, data loaders, cache, moderation and many
						more
					</Text>
					<UnorderedList mt={'1em'} listStyleType={'none'}>
						<ListItem>
							<Flex gap={1} alignItems={'center'}>
								<Icon as={FaCheckCircle} color={'green'}/>
								<Box
									textColor={'gray.400'} fontWeight={600}
									fontSize={'1em'}
									ml={1}
									display={'flex'}
									alignItems={'center'}
								>
									{' '}
									Langchain
								</Box>
							</Flex>
							<Flex gap={1} alignItems={'center'}>
								<Icon as={FaCheckCircle} color={'green'} />
								<Box
									textColor={'gray.400'} fontWeight={600}
									fontSize={'1em'}
									ml={1}
									display={'flex'}
									alignItems={'center'}
								>
									{' '}
									LlamaIndex
								</Box>
							</Flex>
							<Flex gap={1} alignItems={'center'}>
								<Icon as={FaCheckCircle} color={'green'}/>
								<Box
                                    textColor={'gray.400'} fontWeight={600}
									fontSize={'1em'}
									ml={1}
									display={'flex'}
									alignItems={'center'}
								>
									{' '}
									100+ integrations
								</Box>
							</Flex>
						</ListItem>
					</UnorderedList>
				</Box>
				<Image
					boxSize={'xl'}
					src="https://flowiseai.com/_ipx/w_640,q_75/%2F_next%2Fstatic%2Fmedia%2Fintegrations1.8181abd6.png?url=%2F_next%2Fstatic%2Fmedia%2Fintegrations1.8181abd6.png&w=640&q=75"
				/>
			</Flex>
			<Flex mt={'6em'} direction={{ base: 'column', md: 'row' }} gap={'2em'}>
				<Box bgColor={'red'} w={'35em'} >
					<AspectRatio
						ratio={16 / 9}
					>
						<iframe
							title="introduction"
							src="https://flowiseai.com/videos/agentassistant.mp4"
						/>
					</AspectRatio>
				</Box>
				<Box w={'30em'} display={'flex'} flexDirection={'column'} textColor={'white'} justifyContent={'center'} gap={'0.25em'}>
					<Text textColor={'blue.600'}>Agents & Assistants</Text>
					<Text fontSize={'1.8em'} fontWeight={'700'}>Create autonomous agent that can uses tools to execute different tasks</Text>
					<Text textColor={'gray.400'} fontWeight={600}>
						Connect LLMs with memory, data loaders, cache, moderation and many
						more
					</Text>
					<UnorderedList mt={'1em'} listStyleType={'none'}>
						<ListItem>
							<Flex gap={1} alignItems={'center'}>
								<Icon as={FaCheckCircle} color={'green'}/>
								<Box
									textColor={'gray.400'} fontWeight={600}
									fontSize={'1em'}
									ml={1}
									display={'flex'}
									alignItems={'center'}
								>
									{' '}
									Custom Tools
								</Box>
							</Flex>
							<Flex gap={1} alignItems={'center'}>
								<Icon as={FaCheckCircle} color={'green'} />
								<Box
									textColor={'gray.400'} fontWeight={600}
									fontSize={'1em'}
									ml={1}
									display={'flex'}
									alignItems={'center'}
								>
									{' '}
									OpenAI Assistant
								</Box>
							</Flex>
							<Flex gap={1} alignItems={'center'}>
								<Icon as={FaCheckCircle} color={'green'}/>
								<Box
                                    textColor={'gray.400'} fontWeight={600}
									fontSize={'1em'}
									ml={1}
									display={'flex'}
									alignItems={'center'}
								>
									{' '}
									OpenAI Assistant
								</Box>
							</Flex>
						</ListItem>
					</UnorderedList>
				</Box>
			</Flex>
			<Flex mt={'7em'} direction={{ base: 'column-reverse', md: 'row' }} gap={'3em'}>
				<Box w={'30em'} display={'flex'} flexDirection={'column'} textColor={'white'} justifyContent={'center'} gap={'0.25em'}>
					<Text textColor={'blue.600'}>Developer Friendly</Text>
					<Text fontSize={'1.8em'} fontWeight={'700'}>LLM Ochestration</Text>
					<Text textColor={'gray.400'} fontWeight={600}>
                    Extend and integrate to your applications using APIs, SDK and Embedded Chat
					</Text>
					<UnorderedList mt={'1em'} listStyleType={'none'}>
						<ListItem>
							<Flex gap={1} alignItems={'center'}>
								<Icon as={FaCheckCircle} color={'green'}/>
								<Box
									textColor={'gray.400'} fontWeight={600}
									fontSize={'1em'}
									ml={1}
									display={'flex'}
									alignItems={'center'}
								>
									{' '}
									APIs
								</Box>
							</Flex>
							<Flex gap={1} alignItems={'center'}>
								<Icon as={FaCheckCircle} color={'green'} />
								<Box
									textColor={'gray.400'} fontWeight={600}
									fontSize={'1em'}
									ml={1}
									display={'flex'}
									alignItems={'center'}
								>
									{' '}
									Embedded Widget
								</Box>
							</Flex>
							<Flex gap={1} alignItems={'center'}>
								<Icon as={FaCheckCircle} color={'green'}/>
								<Box
                                    textColor={'gray.400'} fontWeight={600}
									fontSize={'1em'}
									ml={1}
									display={'flex'}
									alignItems={'center'}
								>
									{' '}
									React SDK
								</Box>
							</Flex>
						</ListItem>
					</UnorderedList>
				</Box>
				<Image
					boxSize={'md'}
					src="https://imagetolink.com/ib/UN9UxVZTlf.png"
				/>
			</Flex>
			<Flex mt={'7em'} direction={{ base: 'column-reverse', md: 'row' }} gap={'3em'}>
                <Image
					boxSize={'md'}
					src="https://flowiseai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fopensource.bed900d8.png&w=640&q=75"
				/>
				<Box w={'30em'} display={'flex'} flexDirection={'column'} textColor={'white'} justifyContent={'center'} gap={'0.25em'}>
					<Text textColor={'blue.600'}>Platform Agnostic</Text>
					<Text fontSize={'1.8em'} fontWeight={'700'}>Open source LLMs</Text>
					<Text textColor={'gray.400'} fontWeight={600}>
                    Run in air-gapped environment with local LLMs, embeddings and vector databases
					</Text>
					<UnorderedList mt={'1em'} listStyleType={'none'}>
						<ListItem>
							<Flex gap={1} alignItems={'center'}>
								<Icon as={FaCheckCircle} color={'green'}/>
								<Box
									textColor={'gray.400'} fontWeight={600}
									fontSize={'1em'}
									ml={1}
									display={'flex'}
									alignItems={'center'}
								>
									{' '}
									HuggingFace, Ollama, LocalAI, Replicate
								</Box>
							</Flex>
							<Flex gap={1} alignItems={'center'}>
								<Icon as={FaCheckCircle} color={'green'} />
								<Box
									textColor={'gray.400'} fontWeight={600}
									fontSize={'1em'}
									ml={1}
									display={'flex'}
									alignItems={'center'}
								>
									{' '}
									Llama2, Mistral, Vicuna, Orca, Llava
								</Box>
							</Flex>
							<Flex gap={1} alignItems={'center'}>
								<Icon as={FaCheckCircle} color={'green'}/>
								<Box
                                    textColor={'gray.400'} fontWeight={600}
									fontSize={'1em'}
									ml={1}
									display={'flex'}
									alignItems={'center'}
								>
									{' '}
									Self host on AWS, Azure, GCP
								</Box>
							</Flex>
						</ListItem>
					</UnorderedList>
				</Box>
				
			</Flex>
			<Divider mt={'4em'}/>
			<Flex direction={'column'}>
                <Flex mt={'5em'} direction={'column'} textColor={'#98A6B0'} fontWeight={500} alignItems={'center'} textAlign={'center'}>
                <Text textColor={'white'} fontSize={['1em', '1.5em', '2.75em']} fontWeight={700}>Use Cases</Text>
				<Text mt={'0.5em'} w={'35em'} >
                One platform, endless possibilities. See some of the use cases
				</Text>
                </Flex>
				<Box mt={'5em'}>
					<Tabs>
						<TabList gap={'3.2em'}>
							{tabData.map((tab, index) => (
								<Tab key={index} textColor={'gray.500'}>
									{tab.label}
								</Tab>
							))}
						</TabList>
						<TabPanels>
							{tabData.map((tab, index) => (
								<TabPanel p={4} key={index}>
									<Text textColor={'gray.500'}>{tab.content}</Text>
									<Image src={tab.image} />
								</TabPanel>
							))}
						</TabPanels>
					</Tabs>
				</Box>
			</Flex>
			<Divider mt={'6em'} />
            <Flex direction={'column'}>
            <Flex mt={'5em'} direction={'column'} textColor={'#98A6B0'} fontWeight={500} alignItems={'center'} textAlign={'center'}>
                <Text textColor={'white'} fontSize={['1em', '1.5em', '2.75em']} fontWeight={700}>Community 🫶</Text>
				<Text mt={'0.5em'} w={'35em'} >
                Open source community is the heart of Flowise. See why developers love and build using Flowise
				</Text>
                <Button
                        mt={'2em'}
						w={'15em'}
						variant={'blue'}
						rounded={'full'}
						bgGradient="linear(to-r, #5F3EBD, #2861E8)"
						leftIcon={<FaDiscord />}
						textColor={'white'}
					>
						Join Discord{' '}
					</Button>
                </Flex>
            <SimpleGrid mt={'3em'} columns={[1, 2, 3]} spacing={'2em'}>
                {communityVideo.map((x,i) => (
                     <iframe width="352" height="198" src={x.image} title={x.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                ))}
            </SimpleGrid>
            </Flex>
            <Divider mt={'5em'}/>
            <Flex mt={'5em'} direction={'column'} textColor={'#98A6B0'} fontWeight={500} alignItems={'center'} textAlign={'center'}>
                <Text textColor={'white'} fontSize={['1em', '1.5em', '2.75em']} fontWeight={700}>Webinars</Text>
				<Text mt={'0.5em'} w={'35em'} >
                Learn how to use Flowise from different webinar series with our partners
				</Text>
                </Flex>
            <SimpleGrid gap={5} mt={'2em'} columns={[1, 2, 3]}>
            <Card maxW='sm'bgColor={'gray.700'}>
  <CardBody margin={0} p={0}>
    <Image
        h={'11.5em'}
      src='https://flowiseai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsinglestore_aws_webinar.185bcd9c.png&w=1080&q=75'
    />
    <Flex ml={'1em'} gap={5}  mt='6' spacing='3'>
    <Image
        boxSize={50}
      src='https://flowiseai.com/_next/static/media/singlestore.a5b72cb0.svg'
    />
    <Image
      src='https://flowiseai.com/_next/static/media/aws.c9a4034b.svg'
    />
    </Flex>
    <Text mt={'1em'} mx={'1em'} textColor={'white'}>How to Build a NoCode AWS Bedrock LLM App on Flowise</Text>
  </CardBody>
  <CardFooter>
    <NavLink>
        <Text textColor={'purple.400'}>Learn More</Text>
    </NavLink>
  </CardFooter>
</Card>
            <Card maxW='sm'bgColor={'gray.700'}>
  <CardBody margin={0} p={0}>
    <Image
      src='https://flowiseai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmilvus_webinar.0165f039.png&w=828&q=75'
    />
    <Flex ml={'1em'} gap={5}  mt='6' spacing='3'>
    <Image
        boxSize={50}
      src='https://flowiseai.com/_next/static/media/milvus.1ae32e3c.svg'
    />
    </Flex>
    <Text mt={'1em'} mx={'1em'} textColor={'white'}>Drag and Drop LLMs: Simplifying RAG with FlowiseAI and Milvus
</Text>
  </CardBody>
  <CardFooter>
    <NavLink>
        <Text textColor={'purple.400'}>Learn More</Text>
    </NavLink>
  </CardFooter>
</Card>
            <Card maxW='sm'bgColor={'gray.700'}>
  <CardBody margin={0} p={0}>
    <Image
      src='https://flowiseai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flangchainwebinar.2f5914b2.png&w=640&q=75'
    />
    <Flex ml={'1em'} gap={5}  mt='6' spacing='3'>
    <Image
        boxSize={50}
      src='https://flowiseai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flangchain.c1e79304.png&w=48&q=75'
    />
    </Flex>
    <Text mt={'1em'} mx={'1em'} textColor={'white'}>LangChain Weekly Webinar - Low-Code/No-Code LLM</Text>
  </CardBody>
  <CardFooter>
    <NavLink>
        <Text textColor={'purple.400'}>Learn More</Text>
    </NavLink>
  </CardFooter>
</Card>

            </SimpleGrid>
            <Stack mt={'5em'}>
            <Box overflow={'hidden'} justifyContent={'center'} p={"60px"} mx={'5em'}>
                <Flex display={'inline-flex'}  gap={10} whiteSpace={'nowrap'} animation={animation} >
                    {twitterComment.map((x,i) => (
                            <Card maxW='xs' key={i}>
  <CardHeader>
    <Flex spacing='4'>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar name='Segun Adebayo' src={x.icon} />

        <Box>
          <Heading size='sm'>{x.name}</Heading>
          <Text>{x.job}</Text>
        </Box>
      </Flex>
      <IconButton
        variant='ghost'
        colorScheme='gray'
        aria-label='See menu'
        icon={<BsThreeDotsVertical />}
      />
    </Flex>
  </CardHeader>
  <CardBody>
    <Box>
 
  <Image
    objectFit='cover'
    src={x.imageContent}
    alt='Chakra UI'
  />
    </Box>

  </CardBody>

  <CardFooter
    justify='space-between'
    flexWrap='wrap'
    sx={{
      '& > button': {
        minW: '136px',
      },
    }}
  >
    <Button flex='1' variant='ghost' leftIcon={<AiOutlineLike />}>
      Like
    </Button>
    <Button flex='1' variant='ghost' leftIcon={<IoChatboxOutline />}>
      Comment
    </Button>

  </CardFooter>
</Card>
                  
                    ))}
                    {twitterComment.map((x,i) => (
                            <Card maxW='xs' key={i}>
  <CardHeader>
    <Flex spacing='4'>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar name='Segun Adebayo' src={x.icon} />

        <Box>
          <Heading size='sm'>{x.name}</Heading>
          <Text>{x.job}</Text>
        </Box>
      </Flex>
      <IconButton
        variant='ghost'
        colorScheme='gray'
        aria-label='See menu'
        icon={<BsThreeDotsVertical />}
      />
    </Flex>
  </CardHeader>
  <CardBody>
    <Box>
 
  <Image
    objectFit='cover'
    src={x.imageContent}
    alt='Chakra UI'
  />
    </Box>

  </CardBody>

  <CardFooter
    justify='space-between'
    flexWrap='wrap'
    sx={{
      '& > button': {
        minW: '136px',
      },
    }}
  >
    <Button flex='1' variant='ghost' leftIcon={<AiOutlineLike />}>
      Like
    </Button>
    <Button flex='1' variant='ghost' leftIcon={<IoChatboxOutline />}>
      Comment
    </Button>

  </CardFooter>
</Card>
                  
                    ))}
                </Flex>
            </Box>
            
            </Stack>
            <Divider mt={'5em'}/>
            <Box
					mt={'5em'}
					h={'12em'}
					bgGradient="linear(to-l, #FFD460, #FFA500)"
					display={'flex'}
					justifyContent={'center'}
					alignItems={'center'}
					borderRadius={30}
                    gap={'20em'}
				>
           

                    <Flex direction={'column'}>
                    <Text
						textAlign={'start'}
						fontSize={'x-large'}
						fontWeight={600}
                        textColor={'white'}
					>
						Enterprise
					</Text>
                    <Text
						textAlign={'start'}
						fontSize={'x-large'}
						fontWeight={600}
                        textColor={'white'}
					>
						Looking for specific use cases and support?
					</Text>
                    </Flex>

					<Box
						as={Button}
						borderRadius={100}
						border={'none'}
						bgColor={'rgb(42,72,223)'}
					>
						<NavLink to={'/auth/signin'}>
							<Text
								textColor={'white'}
								fontSize={'1.5em'}
								fontWeight={700}
							>
								Lets Chat
							</Text>
						</NavLink>
					</Box>
				</Box>
                <Flex mt={'1em'} justifyContent={'space-between'} alignItems={'center'}>
                    <Text textColor={'white'}>© FlowiseAI Inc. All rights reserved.</Text>
                    <Flex>
                    <Box>
								<Link href="/">
									<Circle size={'3em'}  color={'blue'}>
										<Icon as={BsTwitterX} />
									</Circle>
								</Link>
							</Box>
							<Box>
								<Link href="/">
									<Circle size={'3em'}  color={'blue'}>
										<Icon as={FaGithub} />
									</Circle>
								</Link>
							</Box>
							<Box>
								<Link href="/">
									<Circle size={'3em'}  color={'blue'}>
										<Icon as={FaLinkedin} />
									</Circle>
								</Link>
							</Box>
                    </Flex>
                </Flex>
                </Stack>
		</Stack>
	);
};

export default FlowiseCom;
