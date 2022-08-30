import { bool, func } from "prop-types"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import EmojiPeopleOutlinedIcon from "@mui/icons-material/EmojiPeopleOutlined"
import {
  IconButton,
  ListItemIcon,
  ListItem,
  ListItemText,
  List,
  Toolbar,
} from "@mui/material"
import { DrawerStyled, DrawerHeader } from "./Drawer.style"
import { Link } from "react-router-dom"

const Drawer = ({ open, onDrawerClose }) => {
  return (
    <DrawerStyled variant="persistent" anchor="left" open={open}>
      <Toolbar>
        <DrawerHeader>
          <IconButton onClick={onDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
      </Toolbar>
      <List>
        <ListItem button>
          <ListItemIcon>
            <EmojiPeopleOutlinedIcon />
          </ListItemIcon>
          <Link to={"/meetings"}>
            <ListItemText primary="Planning" />
          </Link>
        </ListItem>
      </List>
    </DrawerStyled>
  )
}

Drawer.propTypes = {
  open: bool.isRequired,
  onDrawerClose: func.isRequired,
}

export default Drawer
