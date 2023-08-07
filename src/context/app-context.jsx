import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext({});

export function useAppContext() {
  return useContext(AppContext)
}

export const AppContextProvider = ({ children }) => {
  const [title, setTitle] = useState("React Context");
  const [count, setCount] = useState(23);

  useEffect(() => {
    setTitle(title);
    setCount(count);
  }, []);

  const AppContextValue = {
    title,
    setTitle,
    count,
    setCount,
  };

  return (
    <AppContext.Provider value={AppContextValue}>
      {children}
    </AppContext.Provider>
  );
};
