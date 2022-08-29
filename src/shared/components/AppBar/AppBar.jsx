import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import UserMenu from "../UserMenu";
import { AppBarStyled, ToolbarStyled } from "./AppBar.style";

const AppBar = ({ open, onMenuClick }) => {
  return (
    <AppBarStyled
      open={open}
      position="fixed"
      variant="outlined"
      elevation={0}
      color="secondary"
    >
      <ToolbarStyled>
        {!open && (
          <IconButton color="inherit" onClick={onMenuClick} edge="start">
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
          Planning Tool
        </Typography>
        <UserMenu />
      </ToolbarStyled>
    </AppBarStyled>
  );
};

export default AppBar;
