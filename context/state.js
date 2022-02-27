import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [user, setUser] = useState();

  //   let sharedState = {
  //     user: {
  //       name: "andres",
  //     },
  //   };

  //   const setUser = (user) => {
  //     console.log("user", user);
  //     sharedState = { ...sharedState user };

  //   };

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
