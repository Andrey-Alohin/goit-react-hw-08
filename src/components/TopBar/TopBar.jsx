import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Toolbar from "@mui/material/Toolbar";

const TopBar = () => {
  return (
    <AppBar position="sticky">
      <Container fixed>
        <Toolbar
          sx={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{ color: "inherit", textDecoration: "none" }}
          >
            PhoneBook
          </Typography>
          <Navigation />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default TopBar;
