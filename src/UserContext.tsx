import React, { createContext, useEffect, useState } from "react";
import { User } from "firebase/auth"; // Removed getAuth
import { auth } from "./firebase";

export type UserContextType = {
  user: User | null;
  loading: boolean;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

type Props = {
  children: React.ReactNode;
};

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe: () => void = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
};
