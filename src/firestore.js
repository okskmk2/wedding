import {
  addDoc,
  collection,
  doc,
  getDocs,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";

export async function fetchData(collectionName) {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    return querySnapshot.docs.map((doc) => ({ ...doc.data(), docId: doc.id }));
  } catch (error) {
    console.error("Error fetching documents: ", error);
    return [];
  }
}

export const updateData = async (collectionName, docId, updatedData) => {
  try {
    await updateDoc(doc(db, collectionName, docId), updatedData);
  } catch (error) {
    console.error("Error updating document: ", error);
  }
};

export const addData = async (collectionName, data, docId) => {
  const item = {
    ...data,
    timestamp: serverTimestamp(),
  };
  if (docId) {
    await setDoc(doc(db, collectionName, docId), item);
  } else {
    await addDoc(collection(db, collectionName), item);
  }
  return item;
};
