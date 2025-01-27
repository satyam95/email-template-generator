"use client";
import { useDragElementLayout } from "@/context/DragDropLayoutElement";
import { useEmailTemplate } from "@/context/EmailTemplateContext";
import { useScreenSize } from "@/context/ScreenSizeContext";
import React, { useState, DragEvent, useRef, useEffect } from "react";
import ColumnLayout from "./LayoutElements/ColumnLayout";
import ViewHtmlDialog from "./ViewHtmlDialog";

const Canvas = ({viewHTMLCode, closeDialog}) => {
  const htmlRef = useRef();
  const { screenSize } = useScreenSize();
  const { dragElementLayout } = useDragElementLayout();
  const { emailTemplate, setEmailTemplate } = useEmailTemplate();
  const [dragOver, setDragOver] = useState(false);
const [htmlCode, setHtmlCode] = useState()
  // Handle drag over event
  const onDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(true);
  };

  // Handle drag leave event
  const onDragLeave = () => {
    setDragOver(false);
  };

  // Handle drop event
  const onDropHandle = () => {
    setDragOver(false);
    if (dragElementLayout?.dragLayout) {
      setEmailTemplate((prev) => [...prev, dragElementLayout.dragLayout]);
    }
  };

  const getLayoutComponent = (layout) => {
    if (layout?.type == "column") {
      return <ColumnLayout layout={layout} />;
    }
  };

  useEffect(() => {
    viewHTMLCode && GetHTMLCode();
  }, [viewHTMLCode])

  const GetHTMLCode = () => {
    if(htmlRef.current) {
      const htmlContent = htmlRef.current.innerHTML;
      console.log(htmlContent)
      setHtmlCode(htmlContent)
    }
  }

  return (
    <div className="mt-20 flex justify-center">
      <div
        className={`bg-white p-6 w-full transition-all duration-200 ${
          screenSize === "desktop" ? "max-w-2xl" : "max-w-md"
        } ${dragOver ? "bg-purple-200 p-8" : ""}`}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDropHandle}
        ref={htmlRef}
      >
        {emailTemplate?.length > 0 ? (
          emailTemplate?.map((layout, index) => (
            <div key={index}>{getLayoutComponent(layout)}</div>
          ))
        ) : (
          <h2 className="p-4 text-center bg-gray-100 border border-dashed">
            Add Layout Here
          </h2>
        )}
      </div>
      <ViewHtmlDialog openDialog={viewHTMLCode} htmlCode={htmlCode} closeDialog={closeDialog} />
    </div>
  );
};

export default Canvas;
