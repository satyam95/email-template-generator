"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

// Define the type for your email template objects
interface EmailTemplateType {
  id: string; // Example: Unique identifier for the template
  name: string; // Example: Name of the template
  content: string; // Example: Content of the email template
  [key: string]: unknown; // Allow additional properties if needed
}

// Define the context type
interface EmailTemplateContextType {
  emailTemplate: EmailTemplateType[];
  setEmailTemplate: React.Dispatch<React.SetStateAction<EmailTemplateType[]>>;
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
  const [emailTemplate, setEmailTemplate] = useState<EmailTemplateType[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
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
