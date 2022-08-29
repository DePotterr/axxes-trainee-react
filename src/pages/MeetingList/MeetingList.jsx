import { Container, Grid, Paper, Typography } from "@mui/material";

const MEETINGS = [
  {
    id: 1,
    type: "evolution",
    date: "30/12/2022",
    duration: "1",
    invitees: ["Bob"],
  },
  {
    id: 2,
    type: "evolution",
    date: "30/12/2022",
    duration: "1",
    invitees: ["Tom"],
  },
  {
    id: 3,
    type: "recap",
    date: "30/12/2022",
    duration: "1",
    invitees: ["Lisa", "Bert"],
  },
  {
    id: 4,
    type: "recap",
    date: "30/12/2022",
    duration: "1",
    invitees: ["Koen"],
  },
  {
    id: 5,
    type: "followUp",
    date: "30/12/2022",
    duration: "1",
    invitees: ["Andrea"],
  },
];

const MeetingList = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item container spacing={2}>
          {MEETINGS.map((meeting) => (
            <Grid item xs={12} key={meeting.id}>
              <Paper variant="outlined" sx={{ p: 2 }}>
                <Grid
                  container
                  justify="space-between"
                  alignItems="center"
                  wrap="nowrap"
                >
                  <Grid container item direction="column">
                    <Grid>
                      <Typography>Type: {meeting.type}</Typography>
                      <Typography>
                        Duration: {meeting.duration} hours
                      </Typography>
                      <Typography>Date: {meeting.date}</Typography>
                      <Typography>
                        Invitees: {meeting.invitees.join(", ")}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default MeetingList;
