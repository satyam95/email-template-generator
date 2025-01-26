import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ConvexClientProvider } from "./ConvexClientProvider";
import GoogleProvider from "./GoogleOAuthProvider";
import UserDetailContextProvider from "@/context/UserDetailContext";
import ScreenSizeContextProvider from "@/context/ScreenSizeContext";
import DragDropLayoutElementProvider from "@/context/DragDropLayoutElement";
import EmailTemplateContextProvider from "@/context/EmailTemplateContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConvexClientProvider>
          <GoogleProvider>
            <UserDetailContextProvider>
              <ScreenSizeContextProvider>
                <DragDropLayoutElementProvider>
                  <EmailTemplateContextProvider>
                    {children}
                  </EmailTemplateContextProvider>
                </DragDropLayoutElementProvider>
              </ScreenSizeContextProvider>
            </UserDetailContextProvider>
          </GoogleProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
