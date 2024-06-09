import peopleServices from "../services/people";

export default function NewContactForm({
  setNewName,
  setNewNumber,
  persons,
  setPersons,
  newName,
  newNumber,
  setToastMessage,
}) {
  const handleInput = (event) => {
    const value = event.target.value;
    switch (event.target.name) {
      case "name":
        setNewName(value);
        break;
      case "number":
        setNewNumber(value);
        break;
      default:
        break;
    }
  };

  const addNumber = (event) => {
    event.preventDefault();
    const newPerson = { name: newName, number: newNumber };
    peopleServices.getAll().then((allContacts) => {
      const existingContact = allContacts.find(
        (person) => person.name === newName
      );
      const isSameNumber = allContacts.find(
        (person) => person.number === newNumber
      );
      if (existingContact) {
        if (
          confirm(
            `${newName} is already added to phonebook, replace the old number with the new one?`
          ) == true
        ) {
          const updatedContact = { ...existingContact, number: newNumber };
          peopleServices
            .update(existingContact.id, updatedContact)
            .then((returnedPerson) => {
              setPersons(
                persons.map((person) => {
                  person.id != existingContact.id ? person : returnedPerson;
                })
              );
              setToastMessage(`Updated ${newName}'s number`);
              setTimeout(() => {
                setToastMessage(null);
              }, 5000);
            });
        }
      } else if (isSameNumber) {
        alert(`${newNumber} is already added to phonebook`);
      } else {
        peopleServices
          .create(newPerson)
          .then((response) => {
            setPersons(persons.concat(response));
            setNewName("");
            setNewNumber("");
            setToastMessage(`Added ${newName}`);
            setTimeout(() => {
              setToastMessage(null);
            }, 5000);
          })
          .catch((error) => {
            console.log("There was an error: ", error);
          });
      }
    });
  };

  return (
    <form className="newContactForm">
      <div className="newContactFields">
        Name: <input name="name" onChange={handleInput} value={newName} />
        Number: <input name="number" onChange={handleInput} value={newNumber} />
      </div>
      <div className="newContactButton">
        <button type="submit" onClick={addNumber} className="addButton">
          ADD
        </button>
      </div>
    </form>
  );
}
