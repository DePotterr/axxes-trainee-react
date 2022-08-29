import { styled, Drawer } from "@mui/material"

export const DrawerStyled = styled(Drawer, {
})(({ theme }) => ({
  width: theme.drawer.width,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: theme.drawer.width,
    boxSizing: "border-box",
  }
}));

export const DrawerHeader = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
}))
