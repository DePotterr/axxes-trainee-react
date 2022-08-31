import { Navigate } from "react-router-dom"
import MeetingOverview from "../../pages/MeetingOverview"
import NewMeeting from "../../pages/NewMeeting"
import NotFound from "../../pages/NotFound"

const ROUTES = [
  {
    path: "/meetings",
    element: <MeetingOverview />,
  },
  {
    path: "/meetings/new",
    element: <NewMeeting />,
  },
  {
    path: "/",
    element: <Navigate to="/meetings" replace={true} />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]

export default ROUTES
