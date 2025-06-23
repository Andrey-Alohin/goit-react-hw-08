import Button from "@mui/material/Button";

function ManageDialogActions({ action, changeAction, confirmActiom }) {
  return (
    <>
      {action === "DEFAULT" && (
        <>
          <Button variant="contained" onClick={() => changeAction("EDIT")}>
            Edit
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => changeAction("DELETE")}
          >
            Delete
          </Button>
        </>
      )}
      {action === "DELETE" && (
        <Button
          variant="outlined"
          color="error"
          onClick={() => confirmActiom("DELETE")}
        >
          Delete
        </Button>
      )}
      {action === "EDIT" && (
        <Button variant="contained" onClick={() => confirmActiom("EDIT")}>
          Save
        </Button>
      )}
    </>
  );
}

export default ManageDialogActions;
