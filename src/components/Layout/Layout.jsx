import Box from "@mui/material/Box";
import TopBar from "../TopBar/TopBar";
import Loader from "../Loader/Loader";

export default function Layout({ children }) {
  return (
    <Box>
      <TopBar />
      {children}
    </Box>
  );
}
