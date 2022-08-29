import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from "@mui/material/Toolbar";


export const AppBarStyled = styled(MuiAppBar)(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: theme.drawer.width,
    width: `calc(100% - ${theme.drawer.width}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
  gap: theme.spacing(1)
}))
