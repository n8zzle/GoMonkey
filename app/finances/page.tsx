"use client";
import React from "react";
import { auth } from "../../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import Signin from "../Signin";

const Finances = () => {
  const [user, loading, error] = useAuthState(auth);

  if (user) {
    return (
      <div className="w-full flex bg-gray-200 p-10 justify-center">
        Finances, {user?.displayName}
      </div>
    );
  } else {
    return <Signin />;
  }
};

export default Finances;
