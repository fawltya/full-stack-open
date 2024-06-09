import { useEffect, useState } from "react";
import Contact from "./Contact";
import peopleServices from "../services/people";
import DeleteButton from "./DeleteButton";

export default function Phonebook({ searchQuery, persons, setToastMessage }) {
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
          setToastMessage(`Deleted number`);
          setTimeout(() => {
            setToastMessage(null);
          }, 5000);
        })
        .catch((error) => {
          alert(`Information on ${persons.name} was already removed.`);
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
            justifyContent: "space-between",
            alignItems: "center",
            gap: "2rem",
            border: "solid white 1px",
            margin: "0.5rem 0",
            borderRadius: "1rem",
            padding: "0 1rem",
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
