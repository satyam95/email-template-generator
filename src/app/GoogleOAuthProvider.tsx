"use client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ReactNode } from "react";

const GoogleProvider = ({ children }: { children: ReactNode }) => {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
      {children}
    </GoogleOAuthProvider>
  );
};

export default GoogleProvider;
