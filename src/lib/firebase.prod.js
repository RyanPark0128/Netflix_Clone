import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyA7KpKqVhCSpvgdOniA-7sHKcFOOSH5yTY",
    authDomain: "netflix-clone-9065c.firebaseapp.com",
    databaseURL: "https://netflix-clone-9065c.firebaseio.com",
    projectId: "netflix-clone-9065c",
    storageBucket: "netflix-clone-9065c.appspot.com",
    messagingSenderId: "136666989005",
    appId: "1:136666989005:web:8804476734e98a39e48484",
    measurementId: "G-CW25TW4K9L"
}

const firebase = Firebase.initializeApp(config);

export { firebase };