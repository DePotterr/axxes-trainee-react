import { MenuItem, TextField } from "@mui/material"
import { USERS } from "../../constants"
import useUser from "../../hooks/useUser/useUser"

const UserMenu = () => {
  const { user, setUser } = useUser()

  const handleChange = (event) => {
    setUser(event.target.value)
  }

  return (
    <TextField
      id="user-select"
      select
      value={user}
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
