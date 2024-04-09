export const handleNameInput = (evt, setName) => {
  const newTextValue = evt.target.value.replace(/[^a-zA-Z\s'-]/g, "");

  setName(newTextValue);
};

export const handleNumberInput = (e, setNumber) => {
  const newNumberValue = e.target.value.replace(
    /[^+\d\s().-]|^[\s().-]+|(?<=\d)[+]|\b[+]\b/g,
    ""
  );

  setNumber(newNumberValue);
};
