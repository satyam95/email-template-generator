"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";

const EmailTemplateList = () => {
  const [emailList, setEmailList] = useState([]);
  return (
    <div className="mt-4">
      <h2 className="font-bold text-xl">Workspace</h2>
      {emailList?.length == 0 && (
        <div className="flex justify-center flex-col items-center mt-4 gap-4">
          <Image src={"/email.png"} alt="email" height={250} width={250} />
          <Button>+ Create New</Button>
        </div>
      )}
    </div>
  );
};

export default EmailTemplateList;
