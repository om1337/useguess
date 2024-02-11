import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import 'aos/dist/aos.css';
import './css/style.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";

const vueApp = createApp(App)
vueApp.use(router)
vueApp.mount('#app')

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF8SOtEylzgGc5GsT6lvCfqx5YPceGLiQ",
  authDomain: "guess-b0a8e.firebaseapp.com",
  projectId: "guess-b0a8e",
  storageBucket: "guess-b0a8e.appspot.com",
  messagingSenderId: "226399883855",
  appId: "1:226399883855:web:0140c1dc07a350750ed03a",
  measurementId: "G-NMY4WCP5J6"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseApp);

export const db = getFirestore(firebaseApp);