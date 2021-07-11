import React, { createContext } from 'react'

const authContext = createContext()

export function AuthProvider({ children }) {
    const auth = '123'
    //   = /* something we'll fill in later */;
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
    return useContext(authContext)
}
