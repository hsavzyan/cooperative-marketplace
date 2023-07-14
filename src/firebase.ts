import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1ZGNAxL_bIsMDW0wteRbDxt4V695-EXI",
  authDomain: "progressivepulse-c437d.firebaseapp.com",
  projectId: "progressivepulse-c437d",
  storageBucket: "progressivepulse-c437d.appspot.com",
  messagingSenderId: "618453197430",
  appId: "1:618453197430:web:740629eb2b2c4fd5b83557",
  measurementId: "G-5KGJ9WK1FP",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
