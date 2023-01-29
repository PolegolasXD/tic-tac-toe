import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyC6wZUM0A-wZ_YBhyF6kJ1SrvDCqgvmrGw',
	authDomain: 'tictactoe-98d66.firebaseapp.com',
	projectId: 'tictactoe-98d66',
	storageBucket: 'tictactoe-98d66.appspot.com',
	messagingSenderId: '1065384580623',
	appId: '1:1065384580623:web:4e80bfd819356cbae4f57a'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
