import React from 'react';

export const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
	const [auth, setAuth] = React.useState(null);
	return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
	const context = React.useContext(AuthContext);

	if (!context) {
		throw new Error('useUser must be used within a AuthContextProvider');
	}

	return context;
};
