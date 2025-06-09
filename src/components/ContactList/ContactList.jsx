import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import PlaceHolder from "../PlaceHolder/PlaceHolder";
import {
  selectContacts,
  selectFiltredContacts,
} from "../../redux/contacts/selectors";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import ListItem from "@mui/material/ListItem";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const visibleContacts = useSelector(selectFiltredContacts);
  return (
    <Box>
      {visibleContacts.length > 0 ? (
        <Grid component={"ul"}>
          {visibleContacts.map(({ id, name, number }) => {
            return (
              <ListItem component={"li"} key={id}>
                <Contact name={name} number={number} id={id} />
              </ListItem>
            );
          })}
        </Grid>
      ) : (
        <PlaceHolder
          hasContacts={contacts.length > 0}
          hasVisibleContacts={visibleContacts.length > 0}
        />
      )}
    </Box>
  );
};

export default ContactList;
