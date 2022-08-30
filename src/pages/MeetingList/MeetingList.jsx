import { Container, Grid } from "@mui/material"
import Meeting from "./Meeting"

const MeetingList = ({ meetings }) => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        {meetings?.map((meeting) => (
          <Meeting key={meeting.id} meeting={meeting}></Meeting>
        ))}
      </Grid>
    </Container>
  )
}

export default MeetingList
