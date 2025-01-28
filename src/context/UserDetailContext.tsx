"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useEmailTemplate } from "./EmailTemplateContext";

interface UserDetail {
  email?: string;
  name?: string;
  picture?: string;
  _id?: string;
}

interface UserDetailContextType {
  userDetail: UserDetail | null;
  setUserDetail: React.Dispatch<React.SetStateAction<UserDetail | null>>;
}

const UserDetailContext = createContext<UserDetailContextType | undefined>(
  undefined
);

const UserDetailContextProvider = ({ children }: { children: ReactNode }) => {
  const [userDetail, setUserDetail] = useState<UserDetail | null>(null);
  const { setEmailTemplate } = useEmailTemplate();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Safely get userDetail from localStorage
      const storage = localStorage.getItem("userDetail");
      const emailTemplateStorage = localStorage.getItem("emailTemplate");

      // Parse email templates and handle undefined cases
      const parsedEmailTemplate = emailTemplateStorage
        ? JSON.parse(emailTemplateStorage)
        : [];
      setEmailTemplate(parsedEmailTemplate);

      // Parse user details and handle undefined cases
      if (storage) {
        try {
          const parsedStorage = JSON.parse(storage) as UserDetail;
          if (parsedStorage.email) {
            setUserDetail(parsedStorage);
          }
        } catch (e) {
          console.error("Error parsing userDetail from localStorage:", e);
        }
      }
    }
  }, [setEmailTemplate]);

  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      {children}
    </UserDetailContext.Provider>
  );
};

export default UserDetailContextProvider;

export const useUserDetail = () => {
  const context = useContext(UserDetailContext);
  if (!context) {
    throw new Error(
      "useUserDetail must be used within a UserDetailContextProvider"
    );
  }
  return context;
};
