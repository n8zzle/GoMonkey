"use client";
import { IconButton } from "@mui/material";
import { useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";

export default function Task() {
  //w-full md:w-2/6
  const [open, setOpen] = useState(true);
  const [user, loading, error] = useAuthState(auth);
  if (user) {
    return (
      <div
        className={`${
          open
            ? "w-full md:w-80 flex flex-col items-center p-5  justify-between"
            : "w-full md:w-28 flex flex-col items-center p-5 justify-between"
        } duration-300 bg-white`}
      >
        <div className={`${open ? "flex" : "hidden"}`}>Task Manager</div>
        <div>
          <IconButton
            onClick={() => setOpen(!open)}
            className="hidden md:flex  duration-300"
          >
            {open ? <KeyboardArrowLeftIcon /> : <KeyboardArrowRightIcon />}
          </IconButton>
        </div>
      </div>
    );
  } else {
    <div className="hidden"></div>;
  }
}
