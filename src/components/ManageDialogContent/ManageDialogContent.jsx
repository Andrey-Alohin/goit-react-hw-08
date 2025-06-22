import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import { Form, Formik } from "formik";
import { ContactValid } from "../ContactForm/ContactForm";
import Box from "@mui/material/Box";

function ManageDialogContent({ action, info }) {
  console.log("mount");
  switch (action) {
    case "EDIT":
      console.log("Edit");
      return (
        <>
          <DialogContentText id="alert-dialog-description">
            Edit contact
          </DialogContentText>
          <Formik initialValues={info} validationSchema={ContactValid}>
            {({ values, errors, handleChange, touched }) => (
              <Form>
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
                    value={values.name}
                    onChange={handleChange}
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                    name="name"
                  />
                  <TextField
                    type="tel"
                    value={values.number}
                    onChange={handleChange}
                    error={touched.number && Boolean(errors.number)}
                    helperText={touched.number && errors.number}
                    name="number"
                  />
                </Box>
              </Form>
            )}
          </Formik>
        </>
      );
    case "DELETE":
      console.log("Delete");
      return (
        <>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete {info.name}? This action cannot be
            undone.
          </DialogContentText>
        </>
      );
    default:
      console.log("default");
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
