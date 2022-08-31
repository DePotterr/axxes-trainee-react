import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import theme from "../../css/theme"
import UserProvider from "../../providers/UserProvider"
import ROUTES from "../../routes"
import Layout from "../Layout"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <UserProvider>
          <Layout>
            <Routes>
              {ROUTES.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Routes>
          </Layout>
        </UserProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
