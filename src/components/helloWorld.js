import React from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

function HelloWorld() {
  const auth = getAuth();
  return (
    <div>
      Hello World
      <div>
        <Link
          to="/"
          onClick={() => {
            signOut(auth)
              .then(() => {
                // Sign-out successful.
              })
              .catch((error) => {
                // An error happened.
              });
          }}
        >
          Logout
        </Link>
      </div>
    </div>
  );
}

export default HelloWorld;
