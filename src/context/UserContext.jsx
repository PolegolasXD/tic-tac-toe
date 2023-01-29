import React from 'react';
import { addData, fetchData } from '../firebase/utils';
import { useAuth } from './AuthContext';

export const UserContext = React.createContext();

export const UserContextProvider = ({ children }) => {
	const isFirstRender = React.useRef(true);

	const { auth } = useAuth();

	console.log(auth);

	const [users, setUsers] = React.useState(null);
	const [isAuth, setIsAuth] = React.useState(false);

	React.useEffect(() => {
		async function getData() {
			await fetchData('users', (data) => {
				setUsers(data);
			});
		}

		if (isFirstRender.current) {
			getData();
			isFirstRender.current = false;
		}
	}, []);

	console.log(users);

	console.log(auth);

	async function postData() {
		try {
			const data = await addData('users', {
				id: auth.uid,
				name: auth.displayName,
				playing: {
					room: 1,
					symbol: 'x',
					status: false
				}
			});
			console.log('foi', data);
		} catch (e) {
			console.log('num foi ', e);
		}
	}

	React.useEffect(() => {
		console.log('entro no efeitp');
		if (auth?.user) {
			console.log('caiu aqaaa');
			const res = users.filter((user) => {
				if (user.id === auth.user.uid) {
					setIsAuth(true);
				}
			});

			console.log(res);

			if (res.lenght > 0) {
				console.log('aaa');
			}
		}
	}, [auth]);

	return <UserContext.Provider value={{ users, setUsers, isAuth }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
	const context = React.useContext(UserContext);

	if (!context) {
		throw new Error('useUser must be used within a UserContextProvider');
	}

	return context;
};
