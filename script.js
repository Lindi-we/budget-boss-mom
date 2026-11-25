import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
    getAuth,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyD5opGYcnguQccRqy0LJ5ksdA9oL9p8X1s",
    authDomain: "budget-boss-mom.firebaseapp.com",
    projectId: "budget-boss-mom",
    storageBucket: "budget-boss-mom.firebasestorage.app",
    messagingSenderId: "669742946494",
    appId: "1:669742946494:web:2882a0214bc59de9a6a6ef"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const form = document.getElementById("sign-in-form");
const message = document.getElementById("sign-in-message");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        await signInWithEmailAndPassword(auth, email, password);
        message.textContent = "You are signed in!";
    } catch (error) {
        message.textContent = "Sign-in failed. Check your email and password.";
        console.error(error);
    }
});
