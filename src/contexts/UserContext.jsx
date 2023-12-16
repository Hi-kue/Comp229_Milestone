import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

// Create a context to manage user-related state and actions
const UserContext = createContext();

/**
 * Provides a context to manage user-related state and actions.
 * @param {*} children - Components to be wrapped by the context.
 * @returns - User context provider.
 */
export const UserProvider = ({ children }) => {
    // State to hold user information
    const [user, setUser] = useState(null);

    // Function to handle user signin
    const signin = (token) => {
        // Decode the token to get user data and set user with data
        const decodedUser = jwtDecode(token);
        setUser(decodedUser);
    }

    // Function to handle user signout
    const signout = () => {
        setUser(null);
    };

    // Provide the user state and functions to the components within the context
    return (
        <UserContext.Provider value={{user, signin, signout}}>
            {children}
        </UserContext.Provider>
    );
};

// Hook to easily access the user context within components
export const useUser = () => {
    return useContext(UserContext);
}