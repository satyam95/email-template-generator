"use client";
import Canvas from "@/components/Canvas";
import EditorHeader from "@/components/EditorHeader";
import ElementsSideBar from "@/components/ElementsSideBar";
import Settings from "@/components/Settings";
import { useUserDetail } from "@/context/UserDetailContext";
import { useConvex } from "convex/react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { api } from "../../../../../convex/_generated/api";
import { useEmailTemplate } from "@/context/EmailTemplateContext";

const Editor = () => {
  const [viewHTMLCode, setViewHtmlCode] = useState<boolean | undefined>(undefined);
  const { templateId } = useParams() as { templateId: string };
  const { userDetail } = useUserDetail();
  const [loading, setLoading] = useState(false);
  const { setEmailTemplate } = useEmailTemplate();
  const convex = useConvex();

  useEffect(() => {
    if (userDetail) {
      GetTemplateData();
    }
  }, [userDetail]);

  const GetTemplateData = async () => {
    setLoading(true);
    const result = await convex.query(api.emailTemplate.GetTemplateDesign, {
      tid: templateId,
      email: userDetail?.email ?? "",
    });

    console.log(result);
    setEmailTemplate(result?.design ?? null); // Safely handle `result.design`
    setLoading(false);
  };

  return (
    <div>
      <EditorHeader viewHTMLCode={(v: boolean) => setViewHtmlCode(v)} />
      {!loading ? (
        <div className="grid grid-cols-5">
          <ElementsSideBar />
          <div className="col-span-3 bg-gray-100">
            <Canvas
              viewHTMLCode={viewHTMLCode}
              closeDialog={() => setViewHtmlCode(false)}
            />
          </div>
          <Settings />
        </div>
      ) : (
        <div>
          <h2>Please wait...</h2>
        </div>
      )}
    </div>
  );
};

export default Editor;
