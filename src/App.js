import { Routes, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import SignUp from "./components/signUp";
import SignIn from "./components/signIn";
import HelloWorld from "./components/helloWorld";
import "./App.css";

function App() {
  initializeApp({
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
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
