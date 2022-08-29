import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import theme from "../../css/theme";
import ROUTES from "../../routes";
import UserProvider from "../../providers/UserProvider";
import Layout from "../Layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <BrowserRouter>
          <CssBaseline />
          <Layout>
            <Routes>
              {ROUTES.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Routes>
          </Layout>
        </BrowserRouter>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
