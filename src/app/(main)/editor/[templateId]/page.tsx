import Canvas from "@/components/Canvas";
import EditorHeader from "@/components/EditorHeader";
import ElementsSideBar from "@/components/ElementsSideBar";
import Settings from "@/components/Settings";
import React from "react";

const Editor = () => {
  return (
    <div>
      <EditorHeader />
      <div className="grid grid-cols-5">
        <ElementsSideBar />
        <div className="col-span-3 bg-gray-100">
          <Canvas />
        </div>
        <Settings />
      </div>
    </div>
  );
};

export default Editor;
