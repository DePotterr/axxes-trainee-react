import { useState, useEffect } from "react"
import { Button, Typography } from "@mui/material"
import { number, bool } from "prop-types"

const Timer = ({ time, start }) => {
  const [count, setCount] = useState(time)

  useEffect(() => {
    if (!start || count === 0) return

    const timeoutID = setTimeout(() => setCount((count) => count - 1), 1000)

    return () => clearTimeout(timeoutID)
  }, [count, start])

  const reset = () => {
    setCount(time)
  }

  return (
    <Typography>
      {count === 0 ? `Time's up!` : count}
      <Button onClick={reset}>Reset</Button>
    </Typography>
  )
}

Timer.propTypes = {
  time: number,
  start: bool,
  defaultValue: number,
}

export default Timer
