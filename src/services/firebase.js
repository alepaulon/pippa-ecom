import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA7-qWljeMK3ABMC3iHAA5jWws_CZB_eQc",
  authDomain: "pippa-ecom.firebaseapp.com",
  projectId: "pippa-ecom",
  storageBucket: "pippa-ecom.appspot.com",
  messagingSenderId: "949323385723",
  appId: "1:949323385723:web:79bd29eb6f895396538bde"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)