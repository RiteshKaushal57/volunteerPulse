import { createContext, useContext, useState } from "react";
import axios from 'axios';

const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Register function (include name if needed)
    const register = async (name, email, password) => {
        try {
            const axiosResponse = await axios.post(
                'http://localhost:4000/auth/register',
                { name, email, password },
                { withCredentials: true }
            );
            return { success: true, data: axiosResponse.data };
        } catch (error) {
            const message =
                error.response?.data?.message || "Registration failed. Please try again.";
            return { success: false, message };
        }
    };

    // Login function
    const login = async (email, password) => {
        try {
            const axiosResponse = await axios.post(
                'http://localhost:4000/auth/login',
                { email, password },
                { withCredentials: true }
            );
            setUser(axiosResponse.data.user);
            setIsLoggedIn(true);
            return { success: true };
        } catch (error) {
            const message =
                error.response?.data?.message || "Login failed. Please try again.";
            return { success: false, message };
        }
    };

    return (
        <Context.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn, login, register }}>
            {children}
        </Context.Provider>
    );
};

export const useContextProvider = () => useContext(Context);
