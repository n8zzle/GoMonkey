import React, { useState } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase/config";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { FacebookAuthProvider } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Popup from "./Popup";
import Link from "next/link";

type Props = {};

const Signin = (props: Props) => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider);
  };

  const signInWithCredentials = () => {
    const email = document.getElementById("emailAddress").value;
    const password = document.getElementById("userpassword").value;
    //console.log(email);
    //console.log(password);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        //console.log(user);
        const text = user.email;
        const separator = "@";
        const parts = text.split(separator);
        const nickname = parts[0];
        user.displayName = nickname;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  const [password, showPassword] = useState(false);
  const [modal, showModal] = useState(false);
  return (
    <div className="w-full h-full  flex">
      <div className="w-full flex justify-center items-center bg-gradient-to-r from-orange-300 to-yellow-200 ...">
        Image Here
      </div>
      <div className="w-full flex flex-col  space-y-5 justify-center items-center">
        {modal ? (
          <Popup />
        ) : (
          <>
            <h1 className="flex text-6xl font-extrabold ">Register now</h1>

            <TextField
              className="w-1/2"
              label="E-mail"
              id="emailAddress"
              variant="outlined"
            />
            {password ? (
              <TextField
                className="w-1/2"
                label="Password"
                id="userpassword"
                variant="outlined"
              />
            ) : (
              <TextField
                className="w-1/2"
                label="Password"
                id="userpassword"
                variant="outlined"
                type="password"
              />
            )}

            <FormControlLabel
              control={
                <Checkbox
                  id="checkbox"
                  onClick={() => showPassword(!password)}
                />
              }
              label="Show password"
            />

            <Button
              onClick={signInWithCredentials}
              className="w-1/2 p-3 bg-gradient-to-r from-orange-300 to-yellow-200 text-black font-bold shadow-md"
            >
              Register now
            </Button>
          </>
        )}

        <Button
          className="flex justify-end items-center"
          onClick={() => showModal(!modal)}
        >
          Already have an account ?
        </Button>

        <span className="block w-1/2 border-t-2"></span>

        <Button
          onClick={signInWithGoogle}
          className="w-1/2 p-3  bg-gradient-to-r from-orange-300 to-green-200  text-black font-bold items-center space-x-3 shadow-md"
        >
          <GoogleIcon />
          <p>Sign in with Google</p>
        </Button>

        <Button
          onClick={signInWithFacebook}
          className="w-1/2 p-3  bg-gradient-to-r from-orange-300 to-blue-200  text-black font-bold items-center space-x-3 shadow-md"
        >
          <FacebookIcon />
          <p>Sign in with Facebook</p>
        </Button>
      </div>
    </div>
  );
};

export default Signin;
