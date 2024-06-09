import { useState, useEffect } from "react";
import Phonebook from "./components/Phonebook";
import NewContactForm from "./components/NewContactForm";
import SearchContacts from "./components/SearchContacts";
import axios from "axios";
import peopleServices from "./services/people";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // useEffect(() => {
  //   peopleServices.getAll();
  //   // axios.get("http://localhost:3001/persons").then((response) => {
  //   //   setPersons(response.data);
  //   // });
  // }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchContacts setSearchQuery={setSearchQuery} />
      <NewContactForm
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Phonebook persons={persons} searchQuery={searchQuery} />
    </div>
  );
};

export default App;
