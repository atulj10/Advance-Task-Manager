import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: "task-manager-5d49b",
    storageBucket: "task-manager-5d49b.appspot.com",
    messagingSenderId: "583847656213",
    appId: process.env.REACT_APP_APPID,
    measurementId: "G-95YE31XV5L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore(app);

export { auth, database };