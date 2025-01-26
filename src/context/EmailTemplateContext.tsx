"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

// Define the context type
interface EmailTemplateContextType {
  emailTemplate: any[]; // Replace `any` with the specific type of your template objects
  setEmailTemplate: React.Dispatch<React.SetStateAction<any[]>>; // Replace `any` with the specific type
}

// Initialize the context with a default value of `null`
const EmailTemplateContext = createContext<EmailTemplateContextType | null>(
  null
);

const EmailTemplateContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [emailTemplate, setEmailTemplate] = useState<any[]>([]); // Replace `any` with the specific type if possible

  useEffect(() => {
    if (typeof window !== undefined) {
      localStorage.setItem("emailTemplate", JSON.stringify(emailTemplate));
    }
  }, [emailTemplate]);
  
  return (
    <EmailTemplateContext.Provider value={{ emailTemplate, setEmailTemplate }}>
      {children}
    </EmailTemplateContext.Provider>
  );
};

export default EmailTemplateContextProvider;

// Custom hook to use the context
export const useEmailTemplate = () => {
  const context = useContext(EmailTemplateContext);
  if (!context) {
    throw new Error(
      "useEmailTemplate must be used within an EmailTemplateContextProvider"
    );
  }
  return context;
};
