import { Routes, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./config/firebaseConfig";
import SignUp from "./components/signUp";
import SignIn from "./components/signIn";
import HelloWorld from "./components/helloWorld";
import "./App.css";

function App() {
  initializeApp(firebaseConfig);
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
