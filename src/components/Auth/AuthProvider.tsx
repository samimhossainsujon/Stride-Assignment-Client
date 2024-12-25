/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useEffect, useState, ReactNode } from "react";
import { app } from "../firebase/firebase";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    User,
} from "firebase/auth";

// Define the AuthContext type
interface AuthContextType {
    user: User | null;
    loading: boolean;
    createUser: (email: string, password: string) => Promise<any>;
    login: (email: string, password: string) => Promise<any>;
    logout: () => Promise<void>;
    googleLogin: () => Promise<any>;
}

// Create the AuthContext
export const AuthContext = createContext<AuthContextType | null>(null);

// Initialize Firebase Auth
const auth = getAuth(app);

// Define the props for AuthProvider
interface AuthProviderProps {
    children: ReactNode;
}

// AuthProvider Component
const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    // Create a new user with email and password
    const createUser = (email: string, password: string) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Login a user with email and password
    const login = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Logout the current user
    const logout = () => {
        return signOut(auth);
    };

    // Login a user with Google
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    };

    // Listen for authentication state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log(currentUser)
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    // Provide authentication info to the context
    const authInfo: AuthContextType = {
        user,
        loading,
        createUser,
        login,
        logout,
        googleLogin,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
