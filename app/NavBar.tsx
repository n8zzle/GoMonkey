"use client";
import Link from "next/link";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { IconButton } from "@mui/material";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`${
        open ? "w-full md:w-72" : "w-full md:w-20"
      } duration-500 bg-red-300 p-10`}
    >
      <Link href="/">Pomodoro</Link>
      <IconButton onClick={() => setOpen(!open)} className="hidden md:flex">
        <ArrowBackIosIcon />
      </IconButton>
    </div>
  );
}
