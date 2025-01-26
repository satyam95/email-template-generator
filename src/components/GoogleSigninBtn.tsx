"use client";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import React from "react";
import { Button } from "./ui/button";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

const GoogleSigninBtn = () => {
  const CreateUser = useMutation(api.users.CreateUser);
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      const userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
      );

      console.log(userInfo.data);
      const user = userInfo.data;

      const result = await CreateUser({
        name: user.name,
        email: user.email,
        picture: user.picture,
      });

      const userDetail = {
        ...user,
        _id: typeof result === "object" && "_id" in result ? result._id : result,
      };

      if (typeof window !== undefined) {
        localStorage.setItem("userDetail", JSON.stringify(userDetail));
      }
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  return <Button onClick={() => googleLogin()}>Get Started</Button>;
};

export default GoogleSigninBtn;
