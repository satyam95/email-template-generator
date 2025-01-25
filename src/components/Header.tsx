import { Mail } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Header = () => {
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
        <Button variant="ghost" size="sm">
          Log in
        </Button>
        <Button size="sm">Get Started</Button>
      </div>
    </header>
  );
};

export default Header;
