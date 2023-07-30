import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import http from "../services/httpService";
import jwtDecode from "jwt-decode";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loadUserDataFromCookie = async () => {
      const tokenCookie = Cookies.get("token");
      if (tokenCookie) {
        setUserData(await jwtDecode(tokenCookie));
        setIsAuthenticated(true);
      } else {
        setUserData(null);
        setIsAuthenticated(false);
      }
    };
    loadUserDataFromCookie();
  }, []);

  const signIn = async (email, password) => {
    const response = await http.post("http://localhost:5000/api/auth/signin", {
      email,
      password,
    });
    setUserData(response.data);
    setIsAuthenticated(true);
  };

  const signOut = async () => {
    Cookies.remove("token");
    setUserData(null);
    setIsAuthenticated(false);
  };

  const signUp = async ({ email, password, firstName, lastName }) => {
    const response = await http.post("http://localhost:5000/api/auth/signup", {
      firstName,
      lastName,
      email,
      password,
    });
    setUserData(response.data);
    setIsAuthenticated(true);
  };

  return (
    <UserContext.Provider
      value={{ userData, isAuthenticated, signIn, signOut, signUp }}
    >
      {children}
    </UserContext.Provider>
  );
};
