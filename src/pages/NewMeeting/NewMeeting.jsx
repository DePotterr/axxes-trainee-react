import {
  Button,
  FormGroup,
  Grid,
  Input,
  MenuItem,
  TextField,
} from "@mui/material"
import axios from "axios"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

const NewMeeting = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const navigate = useNavigate()

  const sendData = async (data) => {
    await axios.post("http://localhost:3002/meetings", {
      ...data,
      invitees: data?.invitees.split(" "),
    })
    navigate("/meetings", { replace: true })
  }

  const onSubmit = (data) => {
    sendData(data)
  }

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={6}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <TextField
              select
              size="small"
              variant="standard"
              label="Type"
              error={!!errors.type}
              {...register("type", { required: true })}
            >
              <MenuItem key={"followUp"} value={"followUp"}>
                followUp
              </MenuItem>
              <MenuItem key={"recap"} value={"recap"}>
                recap
              </MenuItem>
              <MenuItem key={"evolution"} value={"evolution"}>
                evolution
              </MenuItem>
            </TextField>
            <br />
            <Input
              type="date"
              error={!!errors.date}
              {...register("date", { required: true })}
            />{" "}
            <br />
            <Input
              type="number"
              error={!!errors.duration}
              {...register("duration", { required: true })}
            />{" "}
            <br />
            <Input
              error={!!errors.invitees}
              {...register("invitees", { required: true })}
            />{" "}
            <br />
            <Button type="submit">Submit</Button>
          </FormGroup>
        </form>
      </Grid>
    </Grid>
  )
}

export default NewMeeting
