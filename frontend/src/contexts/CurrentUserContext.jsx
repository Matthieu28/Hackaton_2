import { createContext, useContext, useState } from "react";

const CurrentUserContext = createContext();
export default CurrentUserContext;

export const CurrentUserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({ id: null });

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export const useCurrentUserContext = () => useContext(CurrentUserContext);
