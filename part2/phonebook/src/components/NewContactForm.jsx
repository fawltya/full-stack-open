import peopleServices from "../services/people";

export default function NewContactForm({
  setNewName,
  setNewNumber,
  persons,
  setPersons,
  newName,
  newNumber,
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
      const isSameName = allContacts.find((person) => person.name === newName);
      const isSameNumber = allContacts.find(
        (person) => person.number === newNumber
      );
      if (isSameName) {
        alert(`${newName} is already added to phonebook`);
      }
      if (isSameNumber) {
        alert(`${newNumber} is already added to phonebook`);
      } else {
        peopleServices
          .create(newPerson)
          .then((response) => {
            setPersons(persons.concat(response));
            setNewName("");
            setNewNumber("");
          })
          .catch((error) => {
            console.log("There was an error: ", error);
          });
      }
    });
  };

  return (
    <form>
      <div>
        name: <input name="name" onChange={handleInput} value={newName} />
        number: <input name="number" onChange={handleInput} value={newNumber} />
      </div>
      <div>
        <button type="submit" onClick={addNumber} style={{ margin: "10px" }}>
          add
        </button>
      </div>
    </form>
  );
}
