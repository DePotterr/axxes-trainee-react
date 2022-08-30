import { Fragment, useState } from "react"
import { node } from "prop-types"
import { Toolbar } from "@mui/material"
import Drawer from "shared/components/Drawer"
import AppBar from "shared/components/AppBar"
import { Content } from "./Layout.style"

const Layout = ({ children }) => {
  const [open, setOpen] = useState(true)

  const toggleDrawer = () => {
    setOpen((open) => !open)
  }

  return (
    <Fragment>
      <AppBar open={open} onMenuClick={toggleDrawer} />
      <div>
        <Toolbar />
        <Drawer open={open} onDrawerClose={toggleDrawer} />
        <Content open={open}>{children}</Content>
      </div>
    </Fragment>
  )
}

Layout.propTypes = {
  children: node,
}

export default Layout
