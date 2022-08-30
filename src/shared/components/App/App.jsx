import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"

import theme from "shared/css/theme"
import Layout from "shared/components/Layout"
import Label from "shared/components/Label"
import Timer from "shared/components/Timer"
import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import MeetingListContainer from "pages/MeetingList/MeetingListContainer"

import axios from "axios"

import { TIMER_VALUE } from "shared/constants"

function App() {
  const [isTimerActive, setIsTimerActive] = useState(true)
  const [meetings, setMeetings] = useState()

  const toggleTimer = () => {
    setIsTimerActive((prevState) => !prevState)
  }

  const fetchData = async () => {
    const response = await axios.get(process.env.REACT_APP_API_URL)
    console.log(response)
    setMeetings(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Label text="Welcome to the React Traineeship!"></Label>
        <Button onClick={toggleTimer}>Toggle</Button>
        <Timer time={TIMER_VALUE} start={isTimerActive}></Timer>
        <MeetingListContainer meetings={meetings}></MeetingListContainer>
      </Layout>
    </ThemeProvider>
  )
}

export default App
