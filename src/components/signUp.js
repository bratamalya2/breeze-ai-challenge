import React, { useState, useEffect } from "react";
import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isBtnEnabled, setIsBtnEnabled] = useState(false);

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        alert("User sign up successful!");
        navigate("/helloworld");
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        let x = errorMessage.split(" ")[2];
        alert(x.substring(1, x.length - 2));
        // ..
      });
  };

  const googleSignUp = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        alert("Signed in with google!");
        navigate("/helloworld");
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        console.log(errorMessage);
        // ...
      });
  };

  useEffect(() => {
    if (email.length > 0 && password.length > 0) setIsBtnEnabled(true);
    else setIsBtnEnabled(false);
  }, [email, password]);

  return (
    <div>
      <div>
        <label htmlFor="emailfield">Email</label>
        <input
          id="emailfield"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="passwordfield">Password</label>
        <input
          id="passwordfield"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button
          disabled={!isBtnEnabled}
          onClick={() => {
            if (isBtnEnabled) signUp();
          }}
        >
          Create Account
        </button>
      </div>
      <div>
        <button onClick={googleSignUp}>Signup using Google</button>
      </div>
      <div>
        <Link to="/login">Click here to login</Link>
      </div>
    </div>
  );
}

export default SignUp;
