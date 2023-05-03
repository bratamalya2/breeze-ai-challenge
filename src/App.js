import { Routes, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import SignUp from "./components/signUp";
import SignIn from "./components/signIn";
import HelloWorld from "./components/helloWorld";
import "./App.css";

function App() {
  initializeApp({
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
  });
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/helloworld" element={<HelloWorld />} />
      </Routes>
    </div>
  );
}

export default App;
