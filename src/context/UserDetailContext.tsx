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
      const storage = localStorage.getItem("userDetail");
      const emailTemplateStorage = JSON.parse(
        localStorage.getItem("emailTemplate")
      );
      setEmailTemplate(emailTemplateStorage ?? []);
      if (storage) {
        const parsedStorage = JSON.parse(storage) as UserDetail;
        if (parsedStorage.email) {
          setUserDetail(parsedStorage);
        }
      }
    }
  }, []);

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
      "useUserDetailContext must be used within a UserDetailContextProvider"
    );
  }
  return context;
};
