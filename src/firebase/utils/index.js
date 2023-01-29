import { getAuth, GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import { doc, addDoc, getDocs, updateDoc, collection } from '@firebase/firestore';
import { db } from '../firebaseConfig';
export const updateData = async (id, docRef, callback) => {
	try {
		const taskDocRef = doc(db, docRef, id);
		await updateDoc(taskDocRef, callback());
	} catch (e) {
		console.error('Error adding document: ', e);
	}
};

export const fetchData = async (docRef, callback) => {
	await getDocs(collection(db, docRef))
		.then((querySnapshot) => {
			const newData = querySnapshot.docs.map((doc) => ({
				...doc.data(),
				id: doc.id
			}));

			callback(newData);
		})
		.catch((error) => {
			console.log('Error getting documents: ', error);
		});
};

export const addData = async (docName, data) => {
	try {
		const docRef = await addDoc(collection(db, docName), data);
		console.log('Document written with ID: ', docRef.id);
	} catch (e) {
		console.error('Error adding document');
	}
};

export const openAuthPopUp = (callback) => {
	const provider = new GoogleAuthProvider();
	const auth = getAuth();
	signInWithPopup(auth, provider)
		.then((result) => {
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential.accessToken;
			const user = result.user;
			callback(result);
			return { token, user, credential };
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			const email = error.customData.email;
			const credential = GoogleAuthProvider.credentialFromError(error);
			callback(error);
			return { errorCode, errorMessage, email, credential };
		});
};
