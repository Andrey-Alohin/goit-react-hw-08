import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import PlaceHolder from "../PlaceHolder/PlaceHolder";
import {
  selectContacts,
  selectFiltredContacts,
} from "../../redux/contacts/selectors";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const visibleContacts = useSelector(selectFiltredContacts);
  return (
    <div className={css.contactsContainer}>
      {visibleContacts.length > 0 ? (
        <ul className={css.contactsList}>
          {visibleContacts.map(({ id, name, number }) => {
            return (
              <li className={css.contactItem} key={id}>
                <Contact name={name} number={number} id={id} />
              </li>
            );
          })}
        </ul>
      ) : (
        <PlaceHolder
          hasContacts={contacts.length > 0}
          hasVisibleContacts={visibleContacts.length > 0}
        />
      )}
    </div>
  );
};

export default ContactList;
