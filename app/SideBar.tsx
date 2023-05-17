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
import PaidIcon from "@mui/icons-material/Paid";
import { Avatar, IconButton } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { RouteSharp } from "@mui/icons-material";

export default function SideBar() {
  const [open, setOpen] = useState(true);
  const signout = () => {
    signOut(auth);
  };
  const [user, loading, error] = useAuthState(auth);
  const routes = [
    {
      icon: <AccessTimeIcon />,
      name: "Pomodoro",
      style:
        "hover:text-black hover:font-bold hover:bg-gradient-to-r hover:from-orange-300 hover:to-yellow-200 duration-300 rounded-full  flex justify-center text-center p-2 space-x-2",
      path: "/pomodoro",
      key: 1,
    },
    {
      icon: <TaskAltIcon />,
      name: "Tasks",
      style:
        "hover:text-black hover:font-bold hover:bg-gradient-to-r hover:from-orange-300 hover:to-yellow-200 duration-300 duration-300 rounded-full  flex justify-center text-center p-2 space-x-2",
      path: "/tasks",
      key: 2,
    },
    {
      icon: <QueryStatsIcon />,
      name: "Statistics",
      style:
        "hover:text-black hover:font-bold hover:bg-gradient-to-r hover:from-orange-300 hover:to-yellow-200 duration-300 duration-300 rounded-full  flex justify-center text-center p-2 space-x-2",
      path: "/statistics",
      key: 3,
    },
    {
      icon: <PaidIcon />,
      name: "Finances",
      style:
        "hover:text-black hover:font-bold hover:bg-gradient-to-r hover:from-orange-300 hover:to-yellow-200 duration-300 duration-300 rounded-full  flex justify-center text-center p-2 space-x-2",
      path: "/finances",
      key: 4,
    },
    {
      icon: <CalendarMonthIcon />,
      name: "Calendar",
      style:
        "hover:text-black hover:font-bold hover:bg-gradient-to-r hover:from-orange-300 hover:to-yellow-200 duration-300 duration-300 rounded-full  flex justify-center text-center p-2 space-x-2",
      path: "/calendar",
      key: 5,
    },
    {
      icon: <ContactsIcon />,
      name: "Team",
      style:
        "hover:text-black hover:font-bold hover:bg-gradient-to-r hover:from-orange-300 hover:to-yellow-200 duration-300 duration-300 rounded-full  flex justify-center text-center p-2 space-x-2",
      path: "/contacts",
      key: 6,
    },
    {
      icon: <SettingsIcon />,
      name: "Settings",
      style:
        "hover:text-black hover:font-bold hover:bg-gradient-to-r hover:from-orange-300 hover:to-yellow-200 duration-300 duration-300 rounded-full  flex justify-center text-center p-2 space-x-2",
      path: "/settings",
      key: 7,
    },
    {
      icon: <HelpIcon />,
      name: "Help",
      style:
        "hover:text-black hover:font-bold hover:bg-gradient-to-r hover:from-orange-300 hover:to-yellow-200 duration-300 duration-300 rounded-full  flex justify-center text-center p-2 space-x-2",
      path: "/help",
      key: 8,
    },
    {
      icon: <LogoutIcon />,
      name: "Logout",
      style:
        "hover:text-black hover:font-bold hover:bg-gradient-to-r hover:from-orange-300 hover:to-yellow-200 duration-300 duration-300 rounded-full  flex justify-center text-center p-2 space-x-2",
      event: signout,
      path: "/",
      key: 9,
    },
  ];
  const checkPhotoUrl = (open) => {
    if (!user?.photoURL) {
      if (!open) {
        return <Avatar sx={{ width: 64, height: 64 }}>{user.email[0]}</Avatar>;
      } else {
        return (
          <Avatar sx={{ width: 100, height: 100 }}>{user.email[0]}</Avatar>
        );
      }
    } else if (!open) {
      return (
        <Image
          src={`${user.photoURL}`}
          width={64}
          height={64}
          alt="logo"
          className="rounded-full"
        />
      );
    } else {
      return (
        <Image
          src={`${user.photoURL}`}
          width={100}
          height={100}
          alt="logo"
          className="rounded-full"
        />
      );
    }
  };

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
            {open ? checkPhotoUrl(open) : checkPhotoUrl(open)}
          </Link>
          <h1 className={`${open ? "inline-flex" : "hidden"}`}>{user.email}</h1>
        </div>

        <div className="flex flex-col w-full items-center space-y-5">
          {routes.map((r) => (
            <>
              <Link
                key={r.key}
                href={r.path}
                className={r.style}
                onClick={r.event}
              >
                {r.icon}
                <button className={`${open ? "inline-flex" : "hidden"}`}>
                  {r.name}
                </button>
              </Link>
            </>
          ))}
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
