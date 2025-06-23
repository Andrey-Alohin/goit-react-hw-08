import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDialogChangeData,
  selectDialogInfo,
  selectDialogIsOpen,
} from "../../redux/dialog/selectors";
import { closeDialog } from "../../redux/dialog/slice";
import Slide from "@mui/material/Slide";
import ManageDialogContent from "../ManageDialogContent/ManageDialogContent";
import toast from "react-hot-toast";
import { deleteContact, editContact } from "../../redux/contacts/operations";
import ManageDialogActions from "../ManageDialogActions/ManageDialogActions";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ManageDialog() {
  const dispatch = useDispatch();
  const info = useSelector(selectDialogInfo);
  const isOpen = useSelector(selectDialogIsOpen);
  const changeData = useSelector(selectDialogChangeData);
  const [action, setAction] = useState("DEFAULT");
  if (info === null) {
    return;
  }
  const handleClose = () => {
    dispatch(closeDialog());
    setAction("DEFAULT");
  };
  const handleAction = (newAction) => {
    setAction(newAction);
  };
  const confirmAction = (confirm) => {
    if (confirm === "DELETE") {
      toast.promise(dispatch(deleteContact(info.id)).unwrap(), {
        loading: "Try to delete",
        success: "Deleted",
        error: "Try again",
      });
      handleClose();
    }
    if (confirm === "EDIT") {
      const { id } = info;
      const patchContact = { id: id, values: changeData };
      toast.promise(dispatch(editContact(patchContact)).unwrap(), {
        loading: "Update contact...",
        success: "Updated!",
        error: "Try again",
      });
      handleClose();
    }
  };
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      fullWidth
      maxWidth={"md"}
      slots={{
        transition: Transition,
      }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" textAlign={"center"}>
        Manage Contact
      </DialogTitle>
      <DialogContent sx={{ textAlign: "center" }}>
        <ManageDialogContent action={action} data={changeData} />
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center" }}>
        <ManageDialogActions
          action={action}
          changeAction={handleAction}
          confirmActiom={confirmAction}
        />
        <Button variant="outlined" onClick={handleClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ManageDialog;
