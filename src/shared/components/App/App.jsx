import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"

import theme from "shared/css/theme"
import Layout from "shared/components/Layout"
import Label from "shared/components/Label"
import Timer from "shared/components/Timer"
import { Button } from "@mui/material"
import { useState } from "react"

function App() {
  const [isTimerActive, setIsTimerActive] = useState(true)
  const [time, setTime] = useState(60)

  const toggleTimer = () => {
    setIsTimerActive((prevState) => !prevState)
  }

  const setDefaultTime = () => {
    setTime(60)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Label text="Welcome to the React Traineeship!"></Label>
        <Button onClick={toggleTimer}>Toggle {isTimerActive}</Button>
        <Button onClick={setDefaultTime}>Reset</Button>
        <Timer time={time} start={isTimerActive}></Timer>
      </Layout>
    </ThemeProvider>
  )
}

export default App
