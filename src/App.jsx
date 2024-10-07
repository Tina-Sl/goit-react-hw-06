import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import Notification from "./components/Notification/Notification";

import contactsData from "./assets/contacts.json";

import { nanoid } from "nanoid";
import { useState, useEffect } from "react";

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("six-contacts")) || contactsData
  );

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("six-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContactValue) => {
    const newContact = { ...newContactValue, id: nanoid() };
    setContacts((prev) => [...prev, newContact]);
  };

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const selectedContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      {contacts.length > 0 && (
        <SearchBox value={search} handleSelect={setSearch} />
      )}

      {contacts.length > 0 ? (
        <ContactList contacts={selectedContacts} handleDelete={deleteContact} />
      ) : (
        <Notification text="No contacts in the phonebook" />
      )}
      {selectedContacts.length === 0 && contacts.length !== 0 && (
        <Notification text="Contact not found" />
      )}
    </div>
  );
}

export default App;
