import { db } from "@/firebase";
import { collection, addDoc, getDocs, updateDoc, doc } from "firebase/firestore";


export async function create(collection_name: string, data: any) {
    try {
        const docRef = await addDoc(collection(db, collection_name), data);
        return { status: 'success' };
    } catch (error) {
        alert(`Failed to save data!`);
        console.error("Error writing document", error);
    }
}

export async function read(collection_name: string) {
    try {
        const querySnapshot = await getDocs(collection(db, collection_name));
        const result: any[] = [];
        querySnapshot.forEach((doc) => {
            result.push({ id: doc.id, ...doc.data() });
        });
        return result;
    } catch (error) {
        console.error("Error reading documents: ", error);
    }
}

export async function update(collection_name: string, docId: string, newData: any) {
    try {
        const docRef = doc(db, collection_name, docId);
        await updateDoc(docRef, newData);
        console.log("Document updated successfully.");
    } catch (error) {
        console.error("Error updating document: ", error);
    }
}


