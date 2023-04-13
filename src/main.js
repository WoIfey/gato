import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDB5FaYkVVfrQU9QsyliFl0t37yhZrmnR4",
  authDomain: "project-371a.firebaseapp.com",
  databaseURL:
    "https://project-371a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "project-371a",
  storageBucket: "project-371a.appspot.com",
  messagingSenderId: "29313369594",
  appId: "1:29313369594:web:7f9bcf896b71ffb5a19043",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const statesRef = ref(db, "states");

function updateState(state) {
  set(statesRef, { check: state });
}

document.getElementById("add").addEventListener("click", (e) => {
  if (e.button === 0) {
    updateState("on");
  }
});

document.getElementById("remove").addEventListener("click", (e) => {
  if (e.button === 0) {
    updateState("off");
  }
});

onValue(statesRef, (snapshot) => {
  const check = snapshot.child("check").val();
  const secret = document.getElementById("secret");
  const gato = document.getElementById("sad");

  if (check === "on") {
    secret.classList.remove("hidden");
  } else {
    secret.classList.add("hidden");
  }

  if (check === "off") {
    gato.classList.remove("hidden");
  } else {
    gato.classList.add("hidden");
  }
});
