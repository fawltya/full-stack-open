export default function NewContactForm({
  setNewName,
  setNewNumber,
  persons,
  setPersons,
  newName,
  newNumber,
}) {
  const handleInput = (event) => {
    setTimeout(() => {
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
    }, 500);
  };

  const addNumber = (event) => {
    event.preventDefault();
    const isSame = persons.find((person) => person.name === newName);
    isSame
      ? alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat({ name: newName, number: newNumber }));
  };

  return (
    <form>
      <div>
        name: <input name="name" onChange={handleInput} />
        number: <input name="number" onChange={handleInput} />
      </div>
      <div>
        <button type="submit" onClick={addNumber} style={{ margin: "10px" }}>
          add
        </button>
      </div>
    </form>
  );
}
