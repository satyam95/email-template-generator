"use client";
import Canvas from "@/components/Canvas";
import EditorHeader from "@/components/EditorHeader";
import ElementsSideBar from "@/components/ElementsSideBar";
import Settings from "@/components/Settings";
import React, { useState } from "react";

const Editor = () => {
  const [viewHTMLCode, setViewHtmlCode] = useState();
  return (
    <div>
      <EditorHeader viewHTMLCode={(v) => setViewHtmlCode(v)} />
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
    </div>
  );
};

export default Editor;
