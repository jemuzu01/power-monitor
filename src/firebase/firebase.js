// Import necessary functions from Firebase SDK
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Import Firestore method

const firebaseConfig = {
    apiKey: "AIzaSyAt0PBQ7Idijz76-HQELReQ_z_KYEmf-r4",
    authDomain: "power-monitor-d03b9.firebaseapp.com",
    projectId: "power-monitor-d03b9",
    storageBucket: "power-monitor-d03b9.firebasestorage.app",
    messagingSenderId: "165861083660",
    appId: "1:165861083660:web:0592a7c3131e2a32b5fc29"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

// Get Firestore instance
const firestore = getFirestore(app);

export { firestore };
