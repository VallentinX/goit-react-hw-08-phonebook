import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactItem from "../ContactItem/ContactItem";
import {
  deleteContact,
  fetchContacts,
} from "../../redux/contacts/contacts-operations";
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from "../../redux/selectors";
import {
  ContactListContainer,
  Label as ListLabel,
  ListItem as ListItems,
  ErrorMessage as ErrorMsg,
} from "./ContactList.style";
import { Loader } from "components/Loader";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactListContainer>
      {isLoading && <Loader />}{" "}
      {!isLoading && !error && (
        <ListLabel>
          {contacts.map((contact) => (
            <ListItems key={contact.id}>
              <ContactItem
                contact={contact}
                onDeleteContact={handleDeleteContact}
              />
            </ListItems>
          ))}
        </ListLabel>
      )}
      {error && <ErrorMsg>An error occurred while fetching contacts.</ErrorMsg>}
    </ContactListContainer>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
