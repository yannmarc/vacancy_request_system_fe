import { createContext, useContext, useState } from "react";

const UserContext = createContext<{
  user: string;
  setUser: (val: string) => void;
}>({ user: "employee", setUser: () => {} });

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(localStorage.getItem("active_user") || "employee");

  const handleSetUser = (val: string) => {
    localStorage.setItem("active_user", val);
    setUser(val);
  };

  return (
    <UserContext.Provider value={{ user, setUser: handleSetUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);