import { useState, useEffect, useContext } from "react";
import { Container, Grid, Button } from "@mui/material";
import axios from "axios";

import { UserContext } from "../../shared/providers/UserProvider";
import MeetingList from "./MeetingList";

const MeetingOverview = () => {
  const [meetings, setMeetings] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    axios
      .get("http://localhost:3002/meetings")
      .then((response) => setMeetings(response.data));
  }, []);

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        {user === "Employee" && (
          <Grid item>
            <Button variant="contained" color="primary">
              New Meeting
            </Button>
          </Grid>
        )}
        <MeetingList meetings={meetings} />
      </Grid>
    </Container>
  );
};

export default MeetingOverview;
