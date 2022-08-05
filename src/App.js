import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { Box } from "@mui/material";
import HomeView from "./views/pages/HomeView";
function App() {
  return (
    <Box>
      <HeaderComponent />
      <HomeView />
      <FooterComponent />
    </Box>
  );
}

export default App;
