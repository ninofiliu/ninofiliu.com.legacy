import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import mixpanel from "mixpanel-browser";

initializeApp({
  apiKey: "AIzaSyBz4yBgoXegy3O5Sj-ZtIfhHYsMMKoYDD8",
  authDomain: "nino-filiu.firebaseapp.com",
  projectId: "nino-filiu",
  storageBucket: "nino-filiu.appspot.com",
  messagingSenderId: "977932068541",
  appId: "1:977932068541:web:fe5e509210f8374dc1b9d4",
  measurementId: "G-0LZVYZWBTC",
});

const storage = getStorage();

export const uploadFile = async (file: File) => {
  try {
    await uploadBytes(ref(storage, `${new Date().toISOString()}-${file.name}`), file);
  } catch (e) {
    mixpanel.track("upload_error", { message: `${e}` });
  }
};
