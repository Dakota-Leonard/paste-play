// Importing SDKs
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore/lite';

//App configs
const firebaseConfig = {
  apiKey: 'AIzaSyBvvuuPmbtP1H1KcEhvxXe28H0OSVUt41o',
  authDomain: 'paste-play-project.firebaseapp.com',
  projectId: 'paste-play-project',
  storageBucket: 'paste-play-project.appspot.com',
  messagingSenderId: '263411079165',
  appId: '1:263411079165:web:a3c29a1c157a8fa8d9eb94',
  measurementId: 'G-PN3T67EV0K',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Initialize DB
export const db = getFirestore(app);

const printDocs = async () => {
  const q = query(collection(db, 'logs'), where('hidden', '==', false));
  const docs = await getDocs(q);
  docs.forEach(doc => console.log(doc.data()));
};

// console.log(lzma.compress('test'));

printDocs();

export default app;
