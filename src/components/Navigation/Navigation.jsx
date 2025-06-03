import Link from "@mui/material/Link";
import Tabs from "@mui/material/Tabs";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Tabs
      value={0}
      aria-label="navigation tabs"
      role="navigation"
      sx={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Link color="inherit" component={NavLink} to="/contacts">
        Contacts
      </Link>
      <Link sx={{ color: "inherit" }}>Home</Link>
    </Tabs>
  );
};

export default Navigation;
