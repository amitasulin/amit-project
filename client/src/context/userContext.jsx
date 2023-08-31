import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import http from "../services/httpService";
import jwtDecode from "jwt-decode";
import { getData } from "../services/userService";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const userId = userData?.id;

  useEffect(() => {
    const loadUserData = async () => {
      const response = await getData();
      if (response) {
        setUserData(response.data);
      } else {
        setUserData(null);
      }
    };
    const existingToken = Cookies.get("token");

    if (existingToken) {
      const userPayload = jwtDecode(existingToken);
      if (userPayload.id) {
        loadUserData();
      }
    } else if (userId) {
      loadUserData();
    }
  }, [userId]);

  const signIn = async (email, password) => {
    try {
      const response = await http.post(
        "http://localhost:5000/api/auth/signin",
        {
          email,
          password,
        }
      );
      setUserData({ ...userData, id: 0 });
    } catch (e) {
      console.log(e);
    }
  };

  const signOut = async () => {
    Cookies.remove("token");
    setUserData(null);
  };

  const signUp = async ({ email, password, firstName, lastName }) => {
    try {
      const response = await http.post(
        "http://localhost:5000/api/auth/signup",
        {
          firstName,
          lastName,
          email,
          password,
        }
      );
      setUserData({ ...userData, id: 0 });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
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
