import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import http from "../services/httpService";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const loadUserDataFromCookie = async () => {
      const tokenCookie = Cookies.get("token");
      if (tokenCookie) {
        setUserData(await jwtDecode(tokenCookie));
      } else {
        setUserData(null);
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
  };

  const signOut = async () => {
    Cookies.remove("token");
    setUserData(null);
  };

  const signUp = async ({ email, password, firstName, lastName }) => {
    const response = await http.post("http://localhost:5000/api/auth/signup", {
      firstName,
      lastName,
      email,
      password,
    });
    setUserData(response.data);
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        isLoggedIn: Boolean(userData),
        signIn,
        signOut,
        signUp,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
