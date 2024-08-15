import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCJtJh9Y5Jkaygdq0aqeFN4Yjpsd5xDqyw",
  authDomain: "bookify-f3488.firebaseapp.com",
  databaseURL: "https://bookify-f3488-default-rtdb.firebaseio.com",
  projectId: "bookify-f3488",
  storageBucket: "bookify-f3488.appspot.com",
  messagingSenderId: "328190238695",
  appId: "1:328190238695:web:90c8bf86f229878b5ae742",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
// export const db=getFirestore(app)
export const auth = getAuth(app);
export const storage = getStorage(app);
