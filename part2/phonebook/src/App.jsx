import { useState } from "react";
import Phonebook from "./components/Phonebook";
import NewContactForm from "./components/NewContactForm";
import SearchContacts from "./components/SearchContacts";
import Toast from "./components/Toast";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [toastMessage, setToastMessage] = useState(null);

  return (
    <div>
      <h2>Phonebook</h2>
      <div className="topSectionDiv">
        <SearchContacts setSearchQuery={setSearchQuery} />
        <NewContactForm
          setNewName={setNewName}
          setNewNumber={setNewNumber}
          persons={persons}
          setPersons={setPersons}
          newName={newName}
          newNumber={newNumber}
          setToastMessage={setToastMessage}
        />
      </div>
      <h2>Numbers</h2>
      <Phonebook
        persons={persons}
        searchQuery={searchQuery}
        setToastMessage={setToastMessage}
      />
      <Toast message={toastMessage} />
    </div>
  );
};

export default App;
