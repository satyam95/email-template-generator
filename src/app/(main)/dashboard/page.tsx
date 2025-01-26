"use client";
import EmailTemplateList from "@/components/EmailTemplateList";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useUserDetail } from "@/context/UserDetailContext";
import React from "react";

const Dashboard = () => {
  const { userDetail, setUserDetail } = useUserDetail();
  return (
    <div>
      <Header />
      <div className="p-10 md:px-28 lg:px-40 xl:px-56 mt-8">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-3xl">Hello, {userDetail?.name}</h2>
          <Button>+ Create New Email Template</Button>
        </div>
        <EmailTemplateList />
      </div>
    </div>
  );
};

export default Dashboard;
