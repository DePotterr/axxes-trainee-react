import { useState, useEffect } from "react"
import { Container, Grid, Button } from "@mui/material"
import axios from "axios"

import MeetingList from "./MeetingList"
import useUser from "../../shared/hooks/useUser"
import { Link } from "react-router-dom"

const MeetingOverview = () => {
  const [meetings, setMeetings] = useState([])
  const { user } = useUser()

  useEffect(() => {
    axios
      .get("http://localhost:3002/meetings")
      .then((response) => setMeetings(response.data))
  }, [])

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        {user === "Employee" && (
          <Grid item>
            <Link to="/meetings/new">
              <Button variant="contained" color="primary">
                New Meeting
              </Button>
            </Link>
          </Grid>
        )}
        <MeetingList meetings={meetings} />
      </Grid>
    </Container>
  )
}

export default MeetingOverview
