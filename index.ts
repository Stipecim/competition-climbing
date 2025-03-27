import { initializeApp, applicationDefault, cert } from "firebase-admin/app";
import { getFirestore, DocumentReference, Timestamp, FieldValue, Filter } from "firebase-admin/firestore";
import { readJson } from "./utils/read";


const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());


const firebaseConfiguration = readJson("./climbingService.json");

initializeApp({
  credential: cert(firebaseConfiguration)
});

const db = getFirestore();

interface User{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    competitorStartNumber: number;
    creationDate: string;
    id: string;
    role: DocumentReference;
    lastUpdateDate: string;
    username: string
}

interface UserAsRequest{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    competitorStartNumber: number;
    creationDate: string;
    id: string;
    lastUpdateDate: string;
    username: string
}


const getData=async()=>{
    const dataRef= await db.collection("users").get();
    dataRef.forEach((doc)=>{
        console.log("aaaaa", doc.id, "=>", doc.data());
    })
    return dataRef;
};

// Sample API route
app.get("/data", async(req: any, res: any) => {
  res.send(await getData());
});

// API with JSON response
app.post("/form/input", (req: any, res: any) => {
    console.log(req.body);
  res.json({ message: "This is a JSON response from Node.js" });
});


// Start the server
app.listen(PORT, () => {
    console.log("Server is running on port 3000");
  });