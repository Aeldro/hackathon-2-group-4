/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const UserContext = createContext();

export default UserContext;

export function UserContextProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const UserContextValue = useMemo(() => {
    return { isAdmin, setIsAdmin };
  });
  return (
    <UserContext.Provider value={{ UserContextValue }}>
      {children}
    </UserContext.Provider>
  );
}

UserContextProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
