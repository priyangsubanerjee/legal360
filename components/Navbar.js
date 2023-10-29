import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="h-24 bg-slate-950 text-white flex items-center px-20">
      <div className="flex flex-col items-center justify-center space-y-1">
        <Icon icon="octicon:law-16" height={24} />
        <h1 className="text-xl font-bold">
          <span className="text-white/50 mr-1">LEGAL</span>360
        </h1>
      </div>
      <ul className="flex items-center space-x-12 ml-auto">
        <li>Home</li>
        <li>
          <Link href={"/userLogin"}>User Portal</Link>
        </li>
        <li>
          <Link href={"/lawyerLogin"}>Lawyer Portal</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
