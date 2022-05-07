// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app' //getApp and getApps helper fns are using here for to get singletons pattern
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCj-ebczkDkCZ6AOPG7xHzXxFdA4w8PxPk',
  authDomain: 'insta-nextjs-clone.firebaseapp.com',
  projectId: 'insta-nextjs-clone',
  storageBucket: 'insta-nextjs-clone.appspot.com',
  messagingSenderId: '569973396155',
  appId: '1:569973396155:web:7a1b733682e8d741fa8f9e',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
