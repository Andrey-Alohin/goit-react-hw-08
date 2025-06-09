import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { NavLink } from "react-router-dom";

export default function AuthNav() {
  return (
    <Box display={"flex"} flexDirection={"row"} gap={2}>
      <Link
        component={NavLink}
        to={"/register"}
        color="textPrimary"
        sx={{
          transition: "color 350ms ease-in-out",
          "&:hover": { color: "#fff" },
        }}
      >
        Register
      </Link>
      <Link
        component={NavLink}
        to={"/login"}
        color="textPrimary"
        sx={{
          transition: "color 350ms ease-in-out",
          "&:hover": { color: "#fff" },
        }}
      >
        Log In
      </Link>
    </Box>
  );
}
