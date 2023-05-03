import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";

const signInWithCredentials = () => {
  const email = document.getElementById("emailAddress").value;
  const password = document.getElementById("userpassword").value;
  //console.log(email);
  //console.log(password);
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password);
};

const Modal = () => {
  const [password, showPassword] = useState(false);

  return (
    <div className="bg-white w-full rounded-lg flex flex-col  space-y-5 justify-center items-center ">
      <h1 className="flex text-6xl font-extrabold ">Sign in</h1>

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
          <Checkbox id="checkbox" onClick={() => showPassword(!password)} />
        }
        label="Show password"
      />

      <Button
        onClick={signInWithCredentials}
        className="w-1/2 p-3 bg-gradient-to-r from-orange-300 to-yellow-200 text-black font-bold shadow-md"
      >
        Sign in
      </Button>
    </div>
  );
};

export default Modal;
