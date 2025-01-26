"use client";

import { createContext, ReactNode, useContext, useState } from "react";

// Define the context type
interface ScreenSizeContextType {
  screenSize: string;
  setScreenSize: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context with a default value of `null`
const ScreenSizeContext = createContext<ScreenSizeContextType | null>(null);

const ScreenSizeContextProvider = ({ children }: { children: ReactNode }) => {
  const [screenSize, setScreenSize] = useState("desktop");

  return (
    <ScreenSizeContext.Provider value={{ screenSize, setScreenSize }}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export default ScreenSizeContextProvider;

// Custom hook to consume the context
export const useScreenSize = () => {
  const context = useContext(ScreenSizeContext);
  if (!context) {
    throw new Error("useScreenSize must be used within a ScreenSizeContextProvider");
  }
  return context;
};
