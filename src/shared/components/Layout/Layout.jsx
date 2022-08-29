import { useState, Fragment } from "react";
import { node } from "prop-types";
import { Toolbar } from "@mui/material";
import Drawer from "../Drawer";
import AppBar from "../AppBar";
import { Content } from "./Layout.style";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <AppBar open={open} onMenuClick={handleDrawerOpen} />
      <div>
        <Toolbar />
        <Drawer open={open} onDrawerClose={handleDrawerClose} />
        <Content open={open}>{children}</Content>
      </div>
    </Fragment>
  );
};

Layout.propTypes = {
  children: node,
};

export default Layout;
