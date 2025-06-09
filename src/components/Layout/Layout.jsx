import Box from "@mui/material/Box";
import TopBar from "../TopBar/TopBar";
import { useSelector } from "react-redux";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { PropagateLoader } from "react-spinners";

export default function Layout({ children }) {
  const isRefreshing = useSelector(selectIsRefreshing);
  return isRefreshing ? (
    <PropagateLoader color="#009cff" loading={isRefreshing} />
  ) : (
    <Box>
      <TopBar />
      <PropagateLoader color="#009cff" loading={isRefreshing} />
      {children}
    </Box>
  );
}
