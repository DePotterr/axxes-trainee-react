import { Fragment } from "react"
import { node } from "prop-types"
import { Toolbar } from "@mui/material"
import Drawer from "shared/components/Drawer"
import AppBar from "shared/components/AppBar"
import { Content } from "./Layout.style"

const Layout = ({ children }) => {
  const open = true

  return (
    <Fragment>
      <AppBar open={open} />
      <div>
        <Toolbar />
        <Drawer open={open} />
        <Content open={open}>{children}</Content>
      </div>
    </Fragment>
  )
}

Layout.propTypes = {
  children: node,
}

export default Layout
