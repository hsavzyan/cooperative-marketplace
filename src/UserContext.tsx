import React, { createContext, useEffect, useState } from "react";
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";

export type UserContextType = {
  user: User | null;
  loading: boolean;
  signUp: (email: string, password: string) => Promise<User | null>;
  signIn: (email: string, password: string) => Promise<User | null>;
  signOut: () => Promise<void>;
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

  const signUp = async (email: string, password: string) => {
    const credential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    setUser(credential.user);
    return credential.user;
  };

  const signIn = async (email: string, password: string) => {
    const credential = await signInWithEmailAndPassword(auth, email, password);
    setUser(credential.user);
    return credential.user;
  };

  const signOutUser = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{ user, loading, signUp, signIn, signOut: signOutUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
