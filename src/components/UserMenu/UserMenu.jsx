import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../../redux/auth/selectors";
import Button from "@mui/material/Button";
import { logOut } from "../../redux/auth/operations";

export default function UserMenu() {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();
  return (
    <Box display={"flex"} flexDirection={"row"} alignItems={"center"} gap={1}>
      <Typography variant="p" color="#000" sx={{ cursor: "default" }}>
        Hello, {userName}
      </Typography>
      <Button color="secondary.main" onClick={() => dispatch(logOut())}>
        Log Out
      </Button>
    </Box>
  );
}
