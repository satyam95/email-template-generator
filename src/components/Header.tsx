"use client";
import { Mail } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { useUserDetail } from "@/context/UserDetailContext";
import Image from "next/image";
import GoogleSigninBtn from "./GoogleSigninBtn";

const Header = () => {
  const { userDetail } = useUserDetail();

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b">
      <Link className="flex items-center justify-center" href="/">
        <Mail className="h-6 w-6" />
        <span className="ml-2 text-xl font-bold">EmailCraft</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#features"
        >
          Features
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#templates"
        >
          Templates
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#pricing"
        >
          Pricing
        </Link>
      </nav>
      <div className="ml-4 flex items-center gap-4">
        {userDetail?.email ? (
          <div className="flex gap-3 items-center">
            <Link href={"/dashboard"}>
              <Button>Dashboard</Button>
            </Link>
            <Image
              src={userDetail?.picture || "/default-avatar.png"} // Fallback to a default avatar
              alt="user"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        ) : (
          <GoogleSigninBtn />
        )}
      </div>
    </header>
  );
};

export default Header;
