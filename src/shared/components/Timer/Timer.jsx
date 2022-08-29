import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { number, bool } from "prop-types";

const Timer = ({ time, start }) => {
  const [count, setCount] = useState(time);

  useEffect(() => {
    if (!start || count === 0) return;

    const timeoutID = setTimeout(() => setCount((count) => count - 1), 1000);

    return () => clearTimeout(timeoutID);
  }, [count, start]);

  return <Typography>{count}</Typography>;
};

Timer.propTypes = {
  time: number,
  start: bool,
};

export default Timer;
