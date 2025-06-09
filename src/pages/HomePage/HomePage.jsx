import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUserName } from "../../redux/auth/selectors";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUserName);
  return (
    <Container>
      <Typography
        variant="h3"
        textAlign={"center"}
        mt={{ sm: "40px", md: "60px", lg: "80px" }}
      >
        Hello,{" "}
        {isLoggedIn ? userName : "for use this web site log in or register"}
      </Typography>
    </Container>
  );
};

export default HomePage;
