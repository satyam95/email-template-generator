"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Code, Monitor, Smartphone } from "lucide-react";
import { useScreenSize } from "@/context/ScreenSizeContext";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useParams } from "next/navigation";
import { useEmailTemplate } from "@/context/EmailTemplateContext";
import { toast } from "sonner";

const EditorHeader = ({ viewHTMLCode }) => {
  const { screenSize, setScreenSize } = useScreenSize();
  const updateEmailTemplate = useMutation(
    api.emailTemplate.UpdateTemplateDesign
  );
  const { templateId } = useParams();
  const { emailTemplate, setEmailTemplate } = useEmailTemplate();

  const onSaveTemplate = async () => {
    await updateEmailTemplate({
      tid: templateId,
      design: emailTemplate,
    });
    toast('Email Template Saved Successfully!')
  };
  return (
    <div className="p-4 shadow-sm flex justify-between items-center">
      <Image src={"/logo.svg"} alt="logo" width={160} height={150} />

      <div className="flex gap-3">
        <Button
          variant="ghost"
          onClick={() => setScreenSize("desktop")}
          className={`${screenSize == "desktop" && "bg-purple-100 text-primary"}`}
        >
          <Monitor /> Desktop
        </Button>
        <Button
          variant="ghost"
          onClick={() => setScreenSize("mobile")}
          className={`${screenSize == "mobile" && "bg-purple-100 text-primary"}`}
        >
          <Smartphone /> Mobile
        </Button>
      </div>

      <div className="flex gap-3">
        <Button variant="ghost" onClick={() => viewHTMLCode(true)}>
          <Code />
        </Button>
        <Button variant="outline">Send Test Email</Button>
        <Button onClick={onSaveTemplate}>Save Template</Button>
      </div>
    </div>
  );
};

export default EditorHeader;
