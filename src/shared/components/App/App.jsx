import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MeetingOverview from "../../../pages/MeetingOverview";
import NotFound from "../../../pages/NotFound";

import theme from "../../css/theme";
import Layout from "../Layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Layout>
          <Routes>
            <Route path="/meetings" element={<MeetingOverview />} />
            <Route
              path="/"
              element={<Navigate to="/meetings" replace={true} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
