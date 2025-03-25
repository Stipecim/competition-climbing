import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import serviceAccount from './climbing-competition-de5af-firebase-adminsdk-fbsvc-2a1fea6080.json';

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();


const getDocument = async () => {
  try {
    // Fetch documents from 'users' collection
    const snapshot = await db.collection('users').get();
    console.log('QuerySnapshot:', snapshot); // Log the entire snapshot
    console.log('')

    if (snapshot.empty) {
      console.log('No documents found in the "users" collection');
      return;
    }

    snapshot.forEach((doc) => {
      console.log(`${doc.id} =>`, doc.data());
    });
  } catch (error) {
    console.error('Error getting documents:', error);
  }
};

getDocument();
