/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import { createContext, useState, useMemo } from "react";
import Cookies from "js-cookie";
import PropTypes from "prop-types";
import axios from "axios";

const AuthContext = createContext();

export default AuthContext;

export function AuthContextProvider({ children }) {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const [isAdmin, setIsAdmin] = useState(false);

  const verifAdmin = () => {
    if (userToken) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/get-user`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        })
        .then((res) => {
          if (res.data.is_admin) {
            setIsAdmin(true);
          }
        });
    } else {
      setIsAdmin(false);
    }
  };

  const setUser = (token) => {
    if (token) {
      Cookies.set("userToken", token, {
        expires: 1 / 24,
      });
      setUserToken(token);
      verifAdmin();
    } else {
      Cookies.remove("userToken");
      setUserToken(null);
    }
  };

  const AuthContextValue = useMemo(() => {
    return {
      userToken,
      setUserToken,
      setUser,
      isAdmin,
      setIsAdmin,
      verifAdmin,
    };
  });
  return (
    <AuthContext.Provider value={AuthContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

AuthContextProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
