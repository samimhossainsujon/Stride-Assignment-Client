import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIapiKey,
    authDomain: import.meta.env.VITE_APIauthDomain,
    projectId: import.meta.env.VITE_APIprojectId,
    storageBucket: import.meta.env.VITE_APIstorageBucket,
    messagingSenderId: import.meta.env.VITE_APImessagingSenderId,
    appId: import.meta.env.VITE_APIappId,
};

export const app = initializeApp(firebaseConfig);
