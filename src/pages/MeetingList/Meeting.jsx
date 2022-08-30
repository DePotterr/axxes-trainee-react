import { Grid, Paper } from "@mui/material"
import MeetingTypography from "./MeetingTypography"

const Meeting = ({ meeting }) => {
  return (
    <Grid key={meeting.id} item xs={12}>
      <Paper variant="outlined" sx={{ p: 2 }}>
        <MeetingTypography
          typography={`Type: ${meeting.type}`}
        ></MeetingTypography>
        <MeetingTypography
          typography={`Duration: ${meeting.duration}`}
        ></MeetingTypography>
        <MeetingTypography
          typography={`Date: ${meeting.date}`}
        ></MeetingTypography>
        <MeetingTypography
          typography={`Invitees: ${meeting.invitees}`}
        ></MeetingTypography>
      </Paper>
    </Grid>
  )
}

export default Meeting
