import Contact from "./Contact";

export default function Phonebook({ persons, searchQuery }) {
  const filteredContacts = persons.filter(
    (person) =>
      person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.number.includes(searchQuery)
  );

  const printPhonebook = filteredContacts.map((person) => {
    return (
      <Contact name={person.name} number={person.number} key={person.name} />
    );
  });

  return printPhonebook;
}
