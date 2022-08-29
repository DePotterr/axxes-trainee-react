import { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import axios from "axios";

import MeetingList from "./MeetingList";

const MeetingOverview = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/meetings")
      .then((response) => setMeetings(response.data));
  }, []);

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <MeetingList meetings={meetings} />
      </Grid>
    </Container>
  );
};

export default MeetingOverview;
