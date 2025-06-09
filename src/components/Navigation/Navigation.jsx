import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  const validPath = ["/", isLoggedIn ? "/contacts" : ""];
  const currentPath = validPath.includes(location.pathname)
    ? location.pathname
    : false;
  return (
    <Tabs
      value={currentPath}
      aria-label="navigation tabs"
      role="navigation"
      textColor="secondary.contrastText"
      sx={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Tab label="Home" value="/" component={Link} to="/" />
      {isLoggedIn && (
        <Tab
          label="Contacts"
          value="/contacts"
          component={Link}
          to="/contacts"
        />
      )}
    </Tabs>
  );
};

export default Navigation;
