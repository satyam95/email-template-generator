"use client";
import { createContext, ReactNode, useContext, useState, Dispatch, SetStateAction } from "react";

// Define a type for dragElementLayout
interface DragLayoutType {
  type: string; // Example: "column", "row", etc.
  properties?: Record<string, unknown>; // Example: additional properties
}

interface DragDropLayoutElementContextType {
  dragElementLayout: DragLayoutType | null;
  setDragElementLayout: Dispatch<SetStateAction<DragLayoutType | null>>;
}

const DragDropLayoutElement =
  createContext<DragDropLayoutElementContextType | null>(null);

const DragDropLayoutElementProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [dragElementLayout, setDragElementLayout] = useState<DragLayoutType | null>(null);

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
