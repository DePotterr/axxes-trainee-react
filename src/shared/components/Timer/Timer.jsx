import { Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { number, bool } from "prop-types"

const Timer = ({ time, start }) => {
  const [count, setCount] = useState(time)

  useEffect(() => {
    if (!start || count === 0) return
    const timeoutId = setTimeout(() => {
      console.log(count)
      setCount((prevTime) => {
        return prevTime - 1
      })
    }, 1000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [count, start])

  return <Typography>{count}</Typography>
}

Timer.propTypes = {
  time: number,
  start: bool,
}

export default Timer
