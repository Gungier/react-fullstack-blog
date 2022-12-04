import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEZrIZHbNlCHNewONl8orI5HTBObC1-xM",
  authDomain: "my-portfolio-blog-9d484.firebaseapp.com",
  projectId: "my-portfolio-blog-9d484",
  storageBucket: "my-portfolio-blog-9d484.appspot.com",
  messagingSenderId: "870347613743",
  appId: "1:870347613743:web:ac98e83c8fbd1b12f788da",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
