import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcW7chzd5vzU0thuRJnTYI1HTEuKdXao8",
  authDomain: "netflix-clone-ffdee.firebaseapp.com",
  projectId: "netflix-clone-ffdee",
  storageBucket: "netflix-clone-ffdee.appspot.com",
  messagingSenderId: "1005829850436",
  appId: "1:1005829850436:web:132c5236de2c362f8bc311",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;
