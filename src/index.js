import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

import App from './App';

import { UserContextProvider } from './context/UserContext';
import { RoomsContextProvider } from './context/RoomsContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<AuthContextProvider>
			<UserContextProvider>
				<RoomsContextProvider>
					<App />
				</RoomsContextProvider>
			</UserContextProvider>
		</AuthContextProvider>
	</React.StrictMode>
);
