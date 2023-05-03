"use client";
import Link from "next/link";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ContactsIcon from "@mui/icons-material/Contacts";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";

export default function SideBar() {
  const [open, setOpen] = useState(true);
  const signout = () => {
    signOut(auth);
  };
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
        <div className="flex flex-col items-center">
          <Link href="/" className="text-lg font-bold">
            {open ? (
              <Image src="/logo.png" width={100} height={100} alt="logo" />
            ) : (
              <Image src="/logo.png" width={64} height={64} alt="logo" />
            )}
          </Link>
          <h1 className={`${open ? "inline-flex" : "hidden"}`}>{user.email}</h1>
        </div>

        <div className="flex flex-col w-full items-center space-y-5">
          <Link
            href="/pomodoro"
            className="hover:bg-[#F36969] hover:text-white duration-300 rounded-full  flex justify-center text-center p-2 space-x-2"
          >
            <AccessTimeIcon />
            <button className={`${open ? "inline-flex" : "hidden"}`}>
              Pomodoro
            </button>
          </Link>

          <Link
            href="/tasks"
            className="hover:bg-[#F36969] hover:text-white duration-300 rounded-full  flex justify-center text-center p-2 space-x-2"
          >
            <TaskAltIcon />
            <button className={`${open ? "inline-flex" : "hidden"}`}>
              Tasks
            </button>
          </Link>

          <Link
            href="/statistics"
            className="hover:bg-[#F36969] hover:text-white duration-300 rounded-full  flex justify-center text-center p-2 space-x-2"
          >
            <QueryStatsIcon />
            <button className={`${open ? "inline-flex" : "hidden"}`}>
              Stats
            </button>
          </Link>

          <Link
            href="/calendar"
            className="hover:bg-[#F36969] hover:text-white duration-300 rounded-full  flex justify-center text-center p-2 space-x-2"
          >
            <CalendarMonthIcon />
            <button className={`${open ? "inline-flex" : "hidden"}`}>
              Calendar
            </button>
          </Link>

          <Link
            href="/contacts"
            className="hover:bg-[#F36969] hover:text-white duration-300 rounded-full  flex justify-center text-center p-2 space-x-2"
          >
            <ContactsIcon />
            <button className={`${open ? "inline-flex" : "hidden"}`}>
              Contacts
            </button>
          </Link>

          <Link
            href="/settings"
            className="hover:bg-[#F36969] hover:text-white duration-300 rounded-full  flex justify-center text-center p-2 space-x-2"
          >
            <SettingsIcon />
            <button className={`${open ? "inline-flex" : "hidden"}`}>
              Settings
            </button>
          </Link>

          <Link
            href="/help"
            className="hover:bg-[#F36969] hover:text-white duration-300 rounded-full  flex justify-center text-center p-2 space-x-2"
          >
            <HelpIcon />
            <button className={`${open ? "inline-flex" : "hidden"}`}>
              Help
            </button>
          </Link>

          <Link
            href="/"
            className="hover:bg-[#F36969] hover:text-white duration-300 rounded-full  flex justify-center text-center p-2 space-x-2"
            onClick={signout}
          >
            <LogoutIcon />
            <button className={`${open ? "inline-flex" : "hidden"}`}>
              Log out
            </button>
          </Link>
        </div>

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
    return <div className="hidden"></div>;
  }
}
