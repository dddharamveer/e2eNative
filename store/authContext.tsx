import { createContext, useState } from "react";

type AuthContextType = {
    isAuthenticated: boolean;
    user: any;
    setUser: (user: any) => void;
};

export const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    user: null,
    setUser: () => {},
});

const AuthProvider: React.FC = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<any>(null);

    const setAuthContext = (user) => {
        console.log("siuhfuih");

        setIsAuthenticated(!isAuthenticated);
        setUser(user);
    };

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated: isAuthenticated,
                user: user,
                setUser: setAuthContext,
            }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
