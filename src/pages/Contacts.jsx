import { Helmet, HelmetProvider } from "react-helmet-async";

import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import Filter from "../components/SearchFilter/SearchFilter";

function Contacts() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Phonebook</title>
        </Helmet>
        <ContactForm />
        <Filter />
        <ContactList />
      </HelmetProvider>
    </>
  );
}

export default Contacts;
