import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase/config";
type Props = {};

const Signin = (props: Props) => {
  const signin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  return (
    <div className="w-full flex bg-gray-200 p-10 justify-center">
      <button onClick={signin}>Sign in</button>
    </div>
  );
};

export default Signin;
