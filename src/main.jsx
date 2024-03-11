/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAAQcEKd01xkvqTNfB9LgrSwt3PtCTQavk",
    authDomain: "tradesafe-f97ef.firebaseapp.com",
    projectId: "tradesafe-f97ef",
    storageBucket: "tradesafe-f97ef.appspot.com",
    messagingSenderId: "919498574672",
    appId: "1:919498574672:web:cc709ffdb50ece906ffa55",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
