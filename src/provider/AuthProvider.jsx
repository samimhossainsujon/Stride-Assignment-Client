import { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useCreateTokenMutation } from "../redux/feature/JWT/jwtApi";
import { app } from "../firebase/firebase.init";
import AuthContext from "./AuthContext";

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [createToken] = useCreateTokenMutation();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        const result = await createToken(currentUser.email).unwrap();
        if (result.token) {
          localStorage.setItem("token", result.token);
          setLoading(false);
        } else {
          localStorage.removeItem("token");
          setLoading(false);
        }
      } else {
        localStorage.removeItem("token");
        setLoading(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [createToken]);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    googleSignIn,
    logOut,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
