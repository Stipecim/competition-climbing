import { initializeApp, applicationDefault, cert } from "firebase-admin/app";
import { getFirestore, Timestamp, FieldValue, Filter } from "firebase-admin/firestore";

import { readJson } from "./utils/readfile";

const firebaseConfiguration = readJson("./serviceAccountKey.json");

initializeApp({
  credential: cert(firebaseConfiguration)
});

const db = getFirestore();



const getDocument = async () => {
  const docRef = db.collection('categories').doc('alovelace');

await docRef.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815
});

const snapshot = await db.collection('categories').get();
snapshot.forEach((doc) => {
  console.log(doc.id, '=>', doc.data());
});
};

getDocument();