import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDRvLspTVW9BwoAXmCj2FsganIwW5cS_jA",
    authDomain: "task-manager-5d49b.firebaseapp.com",
    projectId: "task-manager-5d49b",
    storageBucket: "task-manager-5d49b.appspot.com",
    messagingSenderId: "583847656213",
    appId: "1:583847656213:web:5f1997ec3185ca8c98471c",
    measurementId: "G-95YE31XV5L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore(app);

export { auth, database };