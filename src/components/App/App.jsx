import css from "./App.module.css";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import PlaceHolder from "../PlaceHolder/PlaceHolder";
import ContactForm from "../ContactForm/ContactForm";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/contactsSlice";
import { fetchContacts } from "../../redux/contactsOps";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1 className={css.appTitle}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <Loader isLoading={isLoading} />
      {error && <Error message={error} />}
      {!isLoading && !error && <ContactList />}
    </>
  );
}

export default App;
