import Container from "@mui/material/Container";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";

export default function ContactsPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Start");

    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Box component={"section"} m={3}>
      <Container sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </Container>
    </Box>
  );
}
