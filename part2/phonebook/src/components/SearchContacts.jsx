export default function SearchContacts({ setSearchQuery }) {
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <>
      <p>Search: </p>
      <input onChange={handleSearch} />
    </>
  );
}
