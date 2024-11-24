import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
 apiKey: "AIzaSyDc6AbrUOp0yGRkD_ts2SEoaipIBqq_vLY",
  authDomain: "fluxdemo-d8090.firebaseapp.com",
  projectId: "fluxdemo-d8090",
  storageBucket: "fluxdemo-d8090.firebasestorage.app",
  messagingSenderId: "979841728185",
  appId: "1:979841728185:web:2086975cf5140fbe3aa568",
  measurementId: "G-27SFL37XMF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Configure additional scopes for Google Sign-In
googleProvider.addScope('email');
googleProvider.addScope('profile');

// Set custom parameters for better UX
googleProvider.setCustomParameters({
  prompt: 'select_account'
});