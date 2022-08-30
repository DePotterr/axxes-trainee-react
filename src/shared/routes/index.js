import MeetingListContainer from "pages/MeetingList/MeetingListContainer"
import NotFound from "pages/NotFound"
import { Navigate } from "react-router-dom"

const ROUTES = [
  {
    path: "/meetings",
    element: <MeetingListContainer />,
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
