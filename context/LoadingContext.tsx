"use client";
import { createContext, useContext, useState } from "react";

const LoadingContext = createContext<{
  // isPageLoading: boolean;
  // setIsPageLoading: (value: boolean) => void;
  isFirstVisit: boolean;
  markFirstVisitComplete: () => void;
}>({
  // isPageLoading: false,
  // setIsPageLoading: () => {},
  isFirstVisit: true,
  markFirstVisitComplete: () => {},
});

export const LoadingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // const [isPageLoading, setIsPageLoading] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  const markFirstVisitComplete = () => {
    sessionStorage.setItem("visited", "true");
    setIsFirstVisit(false);
  };

  return (
    <LoadingContext.Provider
      value={{
        // isPageLoading,
        // setIsPageLoading,
        isFirstVisit,
        markFirstVisitComplete,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
