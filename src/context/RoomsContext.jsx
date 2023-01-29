import React from 'react';
import { fetchData } from '../firebase/utils';

export const RoomsContext = React.createContext();

export const RoomsContextProvider = ({ children }) => {
	const isFirstRender = React.useRef(true);
	const [rooms, setRooms] = React.useState(null);

	React.useEffect(() => {
		async function getData() {
			await fetchData('rooms', (data) => {
				setRooms(data);
			});
		}

		if (isFirstRender.current) {
			isFirstRender.current = false;
			// getData();
		}
	}, []);

	return <RoomsContext.Provider value={{ rooms, setRooms }}>{children}</RoomsContext.Provider>;
};

export const useRooms = () => {
	const context = React.useContext(RoomsContext);

	if (!context) {
		throw new Error('useRooms must be used within a RoomsContextProvider');
	}

	return context;
};
