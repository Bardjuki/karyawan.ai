import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { HashRouter as Router } from 'react-router-dom';

const theme = extendTheme({
	config: {
		initialColorMode: 'dark',
		useSystemColorMode: true,
	},
	colors: {
		light: {
			// Specify your light mode colors here
			primary: '#3498db',
		},
		dark: {
			// Specify your dark mode colors here
			primary: 'rgb(0, 0, 128)',
		},
	},
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Router>
			<ChakraProvider theme={theme}>
				<App />
			</ChakraProvider>
		</Router>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
