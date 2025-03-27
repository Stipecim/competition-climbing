import { initializeApp, cert } from 'firebase-admin/app';
import serviceAccount from './climbing-competition-de5af-firebase-adminsdk-fbsvc-4c4a1c6fc7.json';
import admin from "firebase-admin";


initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

const db = admin.firestore();

export default db;


