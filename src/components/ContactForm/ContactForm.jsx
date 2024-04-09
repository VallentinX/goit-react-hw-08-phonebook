import React, { useState } from "react";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/contacts-operations";
import { selectContacts } from "../../redux/selectors";
import {
  Container as FormContainer,
  Label as FormLabel,
  Input as FormInput,
  AddContact,
} from "./ContactForm.style";
import { handleNameInput, handleNumberInput } from "../HndlInput";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleAddButtonClick = () => {
    const nameExists = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    const numberExists = contacts.some((contact) => contact.number === number);

    if (nameExists) {
      alert(`${name} is already in contacts!`);
    } else if (numberExists) {
      alert(`${number} is already in contacts!`);
    } else if (name.trim() !== "" && number.trim() !== "") {
      dispatch(
        addContact({
          name: name,
          number: number,
        })
      );
      setName("");
      setNumber("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddButtonClick();
    }
  };

  return (
    <FormContainer>
      <AddContact>Add Contact</AddContact>
      <FormLabel>
        <FormInput
          type="text"
          name="name"
          placeholder="Name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={(evt) => handleNameInput(evt, setName)}
          onKeyDown={handleKeyDown}
        />
      </FormLabel>

      <FormLabel>
        <FormInput
          type="tel"
          name="number"
          placeholder="Phone number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={(e) => handleNumberInput(e, setNumber)}
          onKeyDown={handleKeyDown}
        />
      </FormLabel>

      <Button
        style={{ backgrounColor: "red" }}
        type="button"
        action={handleAddButtonClick}
      >
        Add contact
      </Button>
    </FormContainer>
  );
};

export default ContactForm;
