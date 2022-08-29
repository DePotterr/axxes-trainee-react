import { Grid } from "@mui/material";
import { number, shape, string, arrayOf } from "prop-types";

import MeetingCard from "../MeetingCard";

const MeetingList = ({ meetings }) => {
  return (
    <Grid item container spacing={2}>
      {meetings.map((meeting) => (
        <MeetingCard key={meeting.id} {...meeting} />
      ))}
    </Grid>
  );
};

MeetingList.propTypes = {
  meetings: arrayOf(
    shape({
      id: number,
      type: string,
      duration: string,
      date: string,
      invitees: arrayOf(string),
    })
  ),
};

export default MeetingList;
