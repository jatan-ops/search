import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';
import 'firebase/auth'

const app = firebase.initializeApp({
  apiKey: "AIzaSyCHP1NvmYtAlcJmu-bMKCgc7JcOAU_llVM",
  authDomain: "product-2-prod.firebaseapp.com",
  projectId: "product-2-prod",
  storageBucket: "product-2-prod.appspot.com",
  messagingSenderId: "569133600092",
  appId: "1:569133600092:web:66bf3c03954db998144599",
  measurementId: "${config.measurementId}"
});

export const auth = app.auth();
export const analytics = firebase.analytics();

export const db = firebase.firestore();