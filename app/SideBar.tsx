"use client";
import Link from "next/link";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
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

export default function SideBar() {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`${
        open
          ? "w-full md:w-80 flex flex-col items-center p-5 justify-between"
          : "w-full md:w-28 flex flex-col items-center p-5 justify-between"
      } duration-500 bg-white`}
    >
      <div className="flex items-center">
        <Link href="/" className="text-lg font-bold">
          <Image src="/logo.png" width={64} height={64} alt="logo" />
        </Link>
        <h1 className={`${open ? "inline-flex" : "hidden"}`}>
          Igors Cickalenko
        </h1>
      </div>

      <div className="flex flex-col w-full items-center space-y-5">
        <Link
          href="/pomodoro"
          className="hover:bg-[#F36969] hover:text-white duration-300 rounded-full  flex justify-center text-center p-2 space-x-2"
        >
          <AccessTimeIcon />
          <a className={`${open ? "inline-flex" : "hidden"}`}>Pomodoro</a>
        </Link>

        <Link
          href="/tasks"
          className="hover:bg-[#F36969] hover:text-white duration-300 rounded-full  flex justify-center text-center p-2 space-x-2"
        >
          <TaskAltIcon />
          <a className={`${open ? "inline-flex" : "hidden"}`}>Tasks</a>
        </Link>

        <Link
          href="/statistics"
          className="hover:bg-[#F36969] hover:text-white duration-300 rounded-full  flex justify-center text-center p-2 space-x-2"
        >
          <QueryStatsIcon />
          <a className={`${open ? "inline-flex" : "hidden"}`}>Stats</a>
        </Link>

        <Link
          href="/calendar"
          className="hover:bg-[#F36969] hover:text-white duration-300 rounded-full  flex justify-center text-center p-2 space-x-2"
        >
          <CalendarMonthIcon />
          <a className={`${open ? "inline-flex" : "hidden"}`}>Calendar</a>
        </Link>

        <Link
          href="/contacts"
          className="hover:bg-[#F36969] hover:text-white duration-300 rounded-full  flex justify-center text-center p-2 space-x-2"
        >
          <ContactsIcon />
          <a className={`${open ? "inline-flex" : "hidden"}`}>Contacts</a>
        </Link>

        <Link
          href="/settings"
          className="hover:bg-[#F36969] hover:text-white duration-300 rounded-full  flex justify-center text-center p-2 space-x-2"
        >
          <SettingsIcon />
          <a className={`${open ? "inline-flex" : "hidden"}`}>Settings</a>
        </Link>

        <Link
          href="/help"
          className="hover:bg-[#F36969] hover:text-white duration-300 rounded-full  flex justify-center text-center p-2 space-x-2"
        >
          <HelpIcon />
          <a className={`${open ? "inline-flex" : "hidden"}`}>Help</a>
        </Link>

        <Link
          href="/help"
          className="hover:bg-[#F36969] hover:text-white duration-300 rounded-full  flex justify-center text-center p-2 space-x-2"
        >
          <LogoutIcon />
          <a className={`${open ? "inline-flex" : "hidden"}`}>Log out</a>
        </Link>
      </div>

      <div>
        <IconButton onClick={() => setOpen(!open)} className="hidden md:flex">
          <ArrowBackIosIcon />
        </IconButton>
      </div>
    </div>
  );
}
