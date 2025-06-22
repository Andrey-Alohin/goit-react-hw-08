import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDialogInfo,
  selectDialogIsOpen,
} from "../../redux/dialog/selectors";
import { closeDialog } from "../../redux/dialog/slice";
import Slide from "@mui/material/Slide";
import { TransitionGroup } from "react-transition-group";
import Collapse from "@mui/material/Collapse";
import TextField from "@mui/material/TextField";
import ManageDialogContent from "../ManageDialogContent/ManageDialogContent";
import toast from "react-hot-toast";
import { deleteContact, editContact } from "../../redux/contacts/operations";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ManageDialog() {
  const dispatch = useDispatch();
  const info = useSelector(selectDialogInfo);
  const isOpen = useSelector(selectDialogIsOpen);
  const [action, setAction] = useState("default");
  if (info === null) {
    return;
  }
  console.log("111");

  // toast.promise(dispatch(deleteContact(id)).unwrap(), {
  //   loading: "Try to delete",
  //   success: "Deleted",
  //   error: "Try again",
  // });
  const handleClose = () => {
    dispatch(closeDialog());
    setAction("default");
  };
  const handleAction = (newAction) => {
    if (action === newAction && action === "DELETE") {
      toast.promise(dispatch(deleteContact(info.id)).unwrap(), {
        loading: "Try to delete",
        success: "Deleted",
        error: "Try again",
      });
      handleClose();
    }
    if (action === newAction && action === "EDIT") {
      const { id, contactInfo } = info;
      toast.promise(dispatch(editContact({ id, contactInfo })).unwrap(), {
        loading: "Update contact",
        success: "Updated",
        error: "Try again",
      });
    }
    setAction(newAction);
  };
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      fullWidth
      maxWidth
      slots={{
        transition: Transition,
      }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Manage Contact</DialogTitle>
      <DialogContent>
        <ManageDialogContent action={action} info={info} />
      </DialogContent>
      <DialogActions>
        {action !== "DELETE" && (
          <Button onClick={() => handleAction("EDIT")}>
            {action === "EDIT" ? "Save" : "Edit"}
          </Button>
        )}
        {action !== "EDIT" && (
          <Button onClick={() => handleAction("DELETE")}>Delete</Button>
        )}
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ManageDialog;
