"use client";
import React from "react";
import { auth } from "../../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import Signin from "../Signin";

type Props = {};

const Statistics = (props: Props) => {
  const [user, loading, error] = useAuthState(auth);

  if (user) {
    return (
      <div className="w-full flex bg-gray-200 p-10 justify-center">
        Statistics, {user?.displayName}
      </div>
    );
  } else {
    return <Signin />;
  }
};

export default Statistics;
