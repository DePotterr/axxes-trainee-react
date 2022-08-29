import { number, string, arrayOf } from "prop-types";
import { Grid, Paper, Typography } from "@mui/material";

const MeetingCard = ({ type, duration, date, invitees }) => {
  return (
    <Grid item xs={12}>
      <Paper variant="outlined" sx={{ p: 2 }}>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          wrap="nowrap"
        >
          <Grid container item direction="column">
            <Grid>
              <Typography>Type: {type}</Typography>
              <Typography>Duration: {duration} hours</Typography>
              <Typography>Date: {date}</Typography>
              <Typography>Invitees: {invitees.join(", ")}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

MeetingCard.propTypes = {
  id: number,
  type: string,
  duration: string,
  date: string,
  invitees: arrayOf(string),
};

export default MeetingCard;
