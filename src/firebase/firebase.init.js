import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIapiKey,
  authDomain: import.meta.env.VITE_APIauthDomain,
  projectId: import.meta.env.VITE_APIprojectId,
  storageBucket: import.meta.env.VITE_APIstorageBucket,
  messagingSenderId: import.meta.env.VITE_APImessagingSenderId,
  appId: import.meta.env.VITE_APIappId,
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { app, storage };
