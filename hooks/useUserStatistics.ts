import { db } from "@/firebase";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";


interface IQuiz {
    area: string;
    topic: string;
    question: string;
    failed: boolean;
    timestamp: any;
}

interface IUserData {
    ['passed-quizes']: IQuiz[];
}


export default function useUserStatistics({ uid }: { uid: string | undefined }) {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<null | string>(null);
    const [statistics, setStatistics] = useState<null | IUserData>(null);


    useEffect(() => {
        if (!uid) {
            setError("User ID is not available.");
            setLoading(false);
            return;
        }

        const fetchUserData = async () => {
            try {
                setLoading(true);
                setError(null);

                const userDocRef = doc(db, "users-statistics", uid);
                const docSnap = await getDoc(userDocRef);

                if (docSnap.exists()) {
                    setStatistics(docSnap.data() as IUserData);
                } else {
                    setError("No such user data found.");
                }
            } catch (err) {
                setError("Error fetching user data.");
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);


    return { error, loading, statistics };
}