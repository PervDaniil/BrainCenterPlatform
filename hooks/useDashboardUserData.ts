import { db } from "@/firebase";
import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore"; 


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

interface IuseDashboardUserDataResult {
    data: IUserData | null;
    loading: boolean;
    error: string | null;
}


export function useDashboardUserData({ uid }: { uid: string | undefined }): IuseDashboardUserDataResult {
    const [data, setData] = useState<IUserData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

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
                    setData(docSnap.data() as IUserData);
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
    }, [uid]);

    return { data, loading, error };
}
