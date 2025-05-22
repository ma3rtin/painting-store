import { createContext, useState } from "react";

export const SessionContext = createContext();



export const SessionProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {
        setIsAuthenticated(true);
    };
    const logout = () => {
        setIsAuthenticated(false);
    };
    return <SessionContext.Provider value={{
        isAuthenticated,
        login,
        logout
    }}>{children}</SessionContext.Provider>;
};