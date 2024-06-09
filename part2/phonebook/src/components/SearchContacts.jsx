export default function SearchContacts({ setSearchQuery }) {
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <div className="search">
      <p>Search:</p>
      <input onChange={handleSearch} />
    </div>
  );
}
