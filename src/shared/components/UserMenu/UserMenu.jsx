import { useContext } from "react";
import { MenuItem, TextField } from "@mui/material";
import { USERS } from "../../constants";
import { UserContext } from "../../providers/UserProvider";

const UserMenu = () => {
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  const handleChange = (event) => {
    setUser(event.target.value);
  };

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
  );
};

export default UserMenu;
