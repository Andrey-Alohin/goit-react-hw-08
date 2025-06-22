import { useDispatch } from "react-redux";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import { openDialog } from "../../redux/dialog/slice";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleManage = () => {
    dispatch(openDialog({ id, name, number }));
  };

  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"row"}
        gap={1}
        width={"100%"}
        mb={{ xs: "8px", sm: "0" }}
      >
        <ListItemAvatar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar
            sx={{
              bgcolor: "primary.main",
            }}
          >
            {name.charAt(0).toUpperCase()}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <Link
              component={"a"}
              href={`tel:${number}`}
              sx={{ "&:hover": { color: "ButtonText" } }}
            >
              {number}
            </Link>
          }
          primaryTypographyProps={{
            fontWeight: 500,
            fontSize: { xs: "20px", md: "24px", lg: "32px" },
          }}
          secondaryTypographyProps={{
            fontSize: { xs: "18px", md: "20px", lg: "24px" },
          }}
        />
      </Box>
      <Box
        display={"flex"}
        gap={2}
        flexDirection={"row"}
        width={"100%"}
        justifyContent={"flex-end"}
      >
        <Button
          endIcon={<MoreVertIcon />}
          onClick={handleManage}
          variant="contained"
        >
          Manage
        </Button>
      </Box>
    </>
  );
};

export default Contact;
