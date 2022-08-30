import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"

import theme from "shared/css/theme"
import Layout from "shared/components/Layout"
import Label from "shared/components/Label"
import Timer from "shared/components/Timer"
import { Button } from "@mui/material"
import { useEffect, useState } from "react"

import axios from "axios"

import { TIMER_VALUE } from "shared/constants"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ROUTES from "shared/routes"

function App() {
  const [isTimerActive, setIsTimerActive] = useState(true)

  const toggleTimer = () => {
    setIsTimerActive((prevState) => !prevState)
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Layout>
          <Label text="Welcome to the React Traineeship!"></Label>
          <Button onClick={toggleTimer}>Toggle</Button>
          <Timer time={TIMER_VALUE} start={isTimerActive}></Timer>
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
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
