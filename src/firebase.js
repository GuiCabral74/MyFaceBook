import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCMBj_Jl_eZQejaFb3KrJJWA7zQ-qLcXWI",
  authDomain: "my-facebook-cloneapp.firebaseapp.com",
  databaseURL: "https://my-facebook-cloneapp-default-rtdb.firebaseio.com",
  projectId: "my-facebook-cloneapp",
  storageBucket: "my-facebook-cloneapp.appspot.com",
  messagingSenderId: "414903590473",
  appId: "1:414903590473:web:c1086e6de93e362f44e998",
  measurementId: "G-TRTNCTJYWJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);