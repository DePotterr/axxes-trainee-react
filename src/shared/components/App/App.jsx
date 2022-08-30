import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"

import theme from "shared/css/theme"
import Layout from "shared/components/Layout"
import Label from "shared/components/Label"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Label text="Welcome to the React Traineeship!"></Label>
      </Layout>
    </ThemeProvider>
  )
}

export default App
