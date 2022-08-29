import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import theme from "../../css/theme";
import Layout from "../Layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>Welcome to the React Traineeship!</Layout>
    </ThemeProvider>
  );
}

export default App;
