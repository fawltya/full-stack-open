import { useEffect, useState } from "react";
import Contact from "./Contact";
import peopleServices from "../services/people";
import DeleteButton from "./DeleteButton";
import SearchContacts from "./SearchContacts";

export default function Phonebook({ searchQuery, persons, setPersons }) {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = () => {
    peopleServices.getAll().then((initialContacts) => {
      const filteredContacts = initialContacts.filter((person) => {
        if (!person || !person.name || !person.number) {
          return false;
        }
        return (
          person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          person.number.includes(searchQuery)
        );
      });
      setContacts(filteredContacts);
    });
  };

  useEffect(() => {
    fetchContacts();
  }, [persons, searchQuery]);

  const removeEntry = (id) => {
    if (window.confirm("Delete contact?")) {
      peopleServices
        .remove(id)
        .then(() => {
          fetchContacts();
        })
        .catch((error) => {
          console.log("There was an error: ", error);
        });
    }
  };

  return (
    <div>
      {contacts.map((person) => (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "2rem",
          }}
          key={person.name}
        >
          <Contact
            name={person.name}
            number={person.number}
            key={person.name}
          />
          <DeleteButton onClick={() => removeEntry(person.id)} />
        </div>
      ))}
    </div>
  );
}
