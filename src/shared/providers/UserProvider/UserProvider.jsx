import React, { useState } from "react"
import { USERS } from "../../constants"
import { string, node } from "prop-types"

export const UserContext = React.createContext()

const UserProvider = ({ defaultUser = USERS.EMPLOYEE, children }) => {
  const [user, setUser] = useState(defaultUser)

  const value = {
    user,
    setUser,
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

UserProvider.propTypes = {
  defaultUser: string,
  children: node,
}

export default UserProvider
