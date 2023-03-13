import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB7507cpFLdIgYgohQtV_hcEpAqaoTvK5w",
  authDomain: "moviebook-91c7d.firebaseapp.com",
  projectId: "moviebook-91c7d",
  storageBucket: "moviebook-91c7d.appspot.com",
  messagingSenderId: "606163206315",
  appId: "1:606163206315:web:181f91a3efe1463fe077ee",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage();
