"use client";
import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";

import Signin from "./Signin";

export default function Home() {
  const [user, loading, error] = useAuthState(auth);

  if (user) {
    return (
      <div className="w-full flex bg-gray-200 p-10 justify-center">
        Getting Started, {user?.displayName}
      </div>
    );
  } else {
    return <Signin />;
  }
}
