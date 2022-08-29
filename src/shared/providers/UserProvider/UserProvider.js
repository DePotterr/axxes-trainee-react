import { createContext, useState } from 'react';
import { string, node } from 'prop-types';

export const UserContext = createContext({});

const UserProvider = ({ defaultUser = 'Employee', children }) => {
  // Use State to keep the values
  const [user, setUser] = useState(defaultUser);

  // Make the context object:
  const value = {
    user,
    setUser,
  };

  // pass the value in provider and return
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
  /** The default active user */
  defaultUser: string,
  /** The application will be passed as children */
  children: node,
};

export default UserProvider;
