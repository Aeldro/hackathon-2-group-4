import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const UserContext = createContext();

export default UserContext;

export function UserContextProvider({ children }) {
  const [getUsers, setGetUsers] = useState([]);
  const UserContextValue = useMemo(() => {
    return { getUsers, setGetUsers };
  });
  return (
    <UserContext.Provider value={UserContextValue}>
      {children}
    </UserContext.Provider>
  );
}

UserContextProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
