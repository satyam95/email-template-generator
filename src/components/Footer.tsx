import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-6 pt-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <Link className="flex items-center" href="#">
              <Mail className="h-6 w-6" />
              <span className="ml-2 text-xl font-bold">EmailCraft</span>
            </Link>
            <p className="text-sm text-gray-500">
              Beautiful email templates made simple.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="text-gray-500 hover:text-gray-900" href="#">
                  Features
                </Link>
              </li>
              <li>
                <Link className="text-gray-500 hover:text-gray-900" href="#">
                  Templates
                </Link>
              </li>
              <li>
                <Link className="text-gray-500 hover:text-gray-900" href="#">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="text-gray-500 hover:text-gray-900" href="#">
                  About
                </Link>
              </li>
              <li>
                <Link className="text-gray-500 hover:text-gray-900" href="#">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="text-gray-500 hover:text-gray-900" href="#">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold">Connect</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} EmailCraft. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
