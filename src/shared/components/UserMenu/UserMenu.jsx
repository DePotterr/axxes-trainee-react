import { useState } from "react"
import { MenuItem, TextField } from "@mui/material"
import { USERS } from "shared/constants"

const UserMenu = () => {
  const [selectedUser, setSelectedUser] = useState(USERS.EMPLOYEE)

  const handleChange = (event) => {
    setSelectedUser(event.target.value)
  }

  return (
    <TextField
      id="user-select"
      select
      value={selectedUser}
      onChange={handleChange}
      variant="outlined"
      size="small"
      sx={{
        width: 120,
      }}
    >
      <MenuItem value={USERS.EMPLOYEE}>{USERS.EMPLOYEE}</MenuItem>
      <MenuItem value={USERS.ADMIN}>{USERS.ADMIN}</MenuItem>
    </TextField>
  )
}

export default UserMenu
