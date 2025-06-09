import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import ListItemButton from "@mui/material/ListItemButton";
import Link from "@mui/material/Link";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import toast from "react-hot-toast";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    toast.promise(dispatch(deleteContact(id)).unwrap(), {
      loading: "Try to delete",
      success: "Deleted",
      error: "Try again",
    });
  };

  return (
    <>
      <ListItemAvatar>
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
      <Box display={"flex"} gap={2} flexDirection={"column"}>
        <ListItemButton
          onClick={handleDelete}
          sx={{
            bgcolor: "#ef4444",
            borderRadius: "4px",
            "&:hover": { bgcolor: "#ff7979" },
          }}
        >
          Delete
        </ListItemButton>
      </Box>
    </>
  );
};

export default Contact;
