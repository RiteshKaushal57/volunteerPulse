import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios';

const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Fetch current user info (for Google login or session restore)
    useEffect(() => {
        // This runs once when the app loads or refreshes
        axios.get('http://localhost:4000/user/me', { withCredentials: true })
            .then(res => {
                if (res.data) {
                    setUser(res.data);
                    setIsLoggedIn(true);
                } else {
                    setUser(null);
                    setIsLoggedIn(false);
                }
            })
            .catch(() => {
                setUser(null);
                setIsLoggedIn(false);
            });
    }, []);

    // Register function (include name if needed)
    const register = async (name, email, password) => {
        try {
            const axiosResponse = await axios.post(
                'http://localhost:4000/user/register',
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

    // Signin function
    const signin = async (email, password) => {
        try {
            const axiosResponse = await axios.post(
                'http://localhost:4000/user/login',
                { email, password },
                { withCredentials: true }
            );
            setUser(axiosResponse.data.user);
            setIsLoggedIn(true);
            return { success: true };
        } catch (error) {
            console.log("Signin error:", error);
            const message =
                error.response?.data?.message || "Login failed. Please try again.";
            return { success: false, message };
        }
    };

   const logout = async () => {
    
    try {
        await axios.post(
            'http://localhost:4000/user/logout',
            {}, // No body needed
            { withCredentials: true }
        );
        setUser(null);
        setIsLoggedIn(false);
        window.location.href = '/'; // Redirect to home
    } catch (error) {
        console.log("Logout error:", error);
        const message =
            error.response?.data?.message || "Logout failed. Please try again.";
        // Optionally show this message to the user
        // e.g., setError(message);
        return { success: false, message };
    }
};


    return (
        <Context.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn, signin, register, logout,  }}>
            {children}
        </Context.Provider>
    );
};

export const useContextProvider = () => useContext(Context);
