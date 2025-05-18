import { auth } from '../firebase';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';


export function useUser(): User | null {
  const [user, setUser] = useState<User | null>(null); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return user;
}
