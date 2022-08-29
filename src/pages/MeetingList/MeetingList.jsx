import { Container, Grid, Paper, Typography } from "@mui/material";

// const MEETINGS = [
//   {
//     id: 1,
//     type: "evaluation",
//     invitees: "",
//   },
//   {
//     id: 2,
//     invitees: "Tom",
//   },
//   {
//     id: 3,
//     invitees: "Lisa",
//   },
//   {
//     id: 4,
//     invitees: "Koen",
//   },
//   {
//     id: 5,
//     invitees: "Andrea",
//   },
// ];

const MeetingList = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item container spacing={2}>
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
                    <Typography>Example meeting</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MeetingList;
