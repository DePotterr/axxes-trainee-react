import { Container, Grid } from "@mui/material";
import MeetingList from "./MeetingList";

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

const MeetingOverview = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <MeetingList meetings={MEETINGS} />
      </Grid>
    </Container>
  );
};

export default MeetingOverview;
