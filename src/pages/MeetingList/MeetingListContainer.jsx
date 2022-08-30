import axios from "axios"
import { useEffect, useState } from "react"
import MeetingList from "./MeetingList"

const MeetingListContainer = () => {
  const [meetings, setMeetings] = useState()

  const fetchData = async () => {
    const response = await axios.get(process.env.REACT_APP_API_URL)
    console.log(response)
    setMeetings(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <MeetingList meetings={meetings}></MeetingList>
}

export default MeetingListContainer
