"use client";
import { createContext, ReactNode, useContext, useState } from "react";

interface DragDropLayoutElementContextType {
  dragElementLayout: any;
  setDragElementLayout: React.Dispatch<React.SetStateAction<any>>;
}

const DragDropLayoutElement =
  createContext<DragDropLayoutElementContextType | null>(null);

const DragDropLayoutElementProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [dragElementLayout, setDragElementLayout] = useState<any>(null);

  return (
    <DragDropLayoutElement.Provider
      value={{ dragElementLayout, setDragElementLayout }}
    >
      {children}
    </DragDropLayoutElement.Provider>
  );
};

export default DragDropLayoutElementProvider;

// Custom hook to use the context
export const useDragElementLayout = () => {
  const context = useContext(DragDropLayoutElement);
  if (!context) {
    throw new Error(
      "useDragElementLayout must be used within a DragDropLayoutElementProvider"
    );
  }
  return context;
};
