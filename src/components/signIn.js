import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";

function SignIn() {
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isBtnEnabled, setIsBtnEnabled] = useState(false);

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        alert("User login successful!");
        navigate("/helloworld");
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        let x = errorMessage.split(" ")[2];
        alert(x.substring(1, x.length - 2));
      });
  };

  const googleSignIn = () => {
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
            if (isBtnEnabled) signIn();
          }}
        >
          Login
        </button>
      </div>
      <div>
        <button onClick={googleSignIn}>Signin using Google</button>
      </div>
      <div>
        <Link to="/">Click here to signup</Link>
      </div>
    </div>
  );
}

export default SignIn;
