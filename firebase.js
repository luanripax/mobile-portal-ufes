// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, query, where, getFirestore,getDocs, onSnapshot, doc} from "firebase/firestore";
import { schedulePushNotification, registerForPushNotificationsAsync } from "./src/utils/notificationsHelper";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2TJ6gkmWAPxrXL_pZouZKiAXTkgTdL3g",
  authDomain: "ufes-mobile-248db.firebaseapp.com",
  projectId: "ufes-mobile-248db",
  storageBucket: "ufes-mobile-248db.appspot.com",
  messagingSenderId: "621666130634",
  appId: "1:621666130634:web:5b56cbb9034c4b748eb233"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
const q = query(collection(db, "notifications"));

const initNotifications = async() => {
  await registerForPushNotificationsAsync();
}

initNotifications();

const unsubscribe = onSnapshot(q, (snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === "modified") {
        console.log("Modified city: ", change.doc.data().messages);
        const data = change.doc.data().messages.slice(-1).shift();
      schedulePushNotification(data.title, data.message);
    }
  });
});


export default firebaseConfig;