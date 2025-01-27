"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useEmailTemplate } from "./EmailTemplateContext";

const SelectedElementContext = createContext();

const SelectedElementProvider = ({ children }: { children: ReactNode }) => {
  const [selectedElement, setSelectedElement] = useState();
  const { emailTemplate, setEmailTemplate } = useEmailTemplate();

  useEffect(() => {
    if (selectedElement) {
      let updatedEmailTemplates: typeof emailTemplate = []; // Ensure type consistency
      emailTemplate.forEach((item) => {
        if (item.id === selectedElement?.layout?.id) {
          updatedEmailTemplates.push(selectedElement?.layout); // Push updated element
        } else {
          updatedEmailTemplates.push(item); // Push unchanged element
        }
      });
      setEmailTemplate(updatedEmailTemplates);
    }
  }, [selectedElement]);

  return (
    <SelectedElementContext.Provider
      value={{ selectedElement, setSelectedElement }}
    >
      {children}
    </SelectedElementContext.Provider>
  );
};

export default SelectedElementProvider;

export const useSelectedElement = () => {
  return useContext(SelectedElementContext);
};
