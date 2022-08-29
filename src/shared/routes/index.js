import { Navigate } from 'react-router-dom'
import MeetingOverview from '../../pages/MeetingOverview';
import NotFound from '../../pages/NotFound';

const ROUTES = [
  {
    path: '/meetings',
    element: <MeetingOverview />,
  },
  {
    path: '/',
    element: <Navigate to='/meetings' replace={true} />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default ROUTES;
