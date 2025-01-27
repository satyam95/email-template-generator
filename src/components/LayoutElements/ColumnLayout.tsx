"use client";
import { useDragElementLayout } from "@/context/DragDropLayoutElement";
import { useEmailTemplate } from "@/context/EmailTemplateContext";
import React, { useState } from "react";
import ButtonComponent from "../Element/ButtonComponent";
import TextComponent from "../Element/TextComponent";
import ImageComponent from "../Element/ImageComponent";
import LogoComponent from "../Element/LogoComponent";
import DividerComponent from "../Element/DividerComponent";
import { useSelectedElement } from "@/context/SelectedElementContext";

const ColumnLayout = ({ layout }) => {
  const [dragOver, setDragOver] = useState();
  const { emailTemplate, setEmailTemplate } = useEmailTemplate();
  const { dragElementLayout, setDragElementLayout } = useDragElementLayout();
  const { selectedElement, setSelectedElement } = useSelectedElement();

  const onDragOverHandle = (event, index) => {
    event.preventDefault();
    setDragOver({
      index: index,
      columnId: layout?.id,
    });
  };

  const onDropHandle = () => {
    const index = dragOver.index;
    setEmailTemplate((prevItem) =>
      prevItem?.map((col) =>
        col.id === layout?.id
          ? { ...col, [index]: dragElementLayout?.dragElement }
          : col
      )
    );
    setDragOver(null);
  };

  const GetElementComponent = (element) => {
    if (element?.type == "Button") {
      return <ButtonComponent {...element} />;
    } else if (element?.type == "Text") {
      return <TextComponent {...element} />;
    } else if (element?.type == "Image") {
      return <ImageComponent {...element} />;
    } else if (element?.type == "Logo") {
      return <LogoComponent {...element} />;
    } else if (element?.type == "Divider") {
      return <DividerComponent {...element} />;
    }
    return element?.type;
  };

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${layout?.numOfCol}, 1fr)`,
          gap: "0px",
        }}
      >
        {Array.from({ length: layout?.numOfCol }).map((_, index) => (
          <div
            key={index}
            className={`p-0 flex items-center h-full w-full cursor-pointer justify-center items-center ${!layout?.[index]?.type && "bg-gray-100 border border-dashed"} ${index == dragOver?.index && dragOver?.columnId && "bg-green-100"} ${selectedElement?.layout?.id == layout?.id && selectedElement?.index == index && "border-blue-500 border"}`}
            onDragOver={(event) => onDragOverHandle(event, index)}
            onDrop={onDropHandle}
            onClick={() => setSelectedElement({ layout: layout, index: index })}
          >
            {GetElementComponent(layout?.[index]) ?? "Drag Element Here"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColumnLayout;
