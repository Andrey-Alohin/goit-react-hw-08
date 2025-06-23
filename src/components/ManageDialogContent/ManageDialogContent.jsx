import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { setChangeData } from "../../redux/dialog/slice";
import { useDispatch } from "react-redux";

function ManageDialogContent({ action, data }) {
  const dispatch = useDispatch();
  console.log("mount");
  switch (action) {
    case "EDIT":
      console.log("Edit");
      return (
        <>
          <DialogContentText id="alert-dialog-description">
            Edit contact
          </DialogContentText>
          <Box
            display={"flex"}
            flexDirection={"column"}
            p={3}
            gap={2}
            maxWidth={500}
            m={"0 auto"}
            bgcolor={"Background"}
            borderRadius={2}
          >
            <TextField
              type="text"
              value={data.name}
              onChange={(e) =>
                dispatch(setChangeData({ name: e.target.value }))
              }
              name="name"
            />
            <TextField
              type="tel"
              value={data.number}
              onChange={(e) =>
                dispatch(setChangeData({ number: e.target.value }))
              }
              name="number"
            />
          </Box>
        </>
      );
    case "DELETE":
      console.log("Delete");
      return (
        <>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete {data.name}? This action cannot be
            undone.
          </DialogContentText>
        </>
      );
    default:
      return (
        <>
          <DialogContentText id="alert-dialog-description">
            What would you like to do with this contact?
          </DialogContentText>
        </>
      );
  }
}

export default ManageDialogContent;
