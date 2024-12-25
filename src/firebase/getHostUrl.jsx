// filepath: /d:/Educational/web dev/stride/assaignment/stride-assignment-client/src/firebase/getHostUrl.jsx
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebase.init";

const GetHostUrl = async (file) => {
  const storageRef = ref(storage, `files/${file.name}`);
  await uploadBytes(storageRef, file);
  const url = `https://firebasestorage.googleapis.com/v0/b/university-management-pr-fbe1c.appspot.com/o/files%2F${file.name}?alt=media`;
  return url;
};

export default GetHostUrl;
