import { auth } from '../firebase';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';


interface ProtectedRouteProps {
    children: React.ReactNode;
}


export default function ProtectedRoute({ children }: ProtectedRouteProps) {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                router.push('/login');
            } else {
                setAuthenticated(true);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [router]);


    if (loading) {
        return (
            <div className="h-screen grid place-items-center">
                <Loader2 className="w-12 h-12 animate-spin" />
            </div>
        );
    }

    if (!authenticated) {
        router.push('/login');
    }

    return <>{children}</>;
}
