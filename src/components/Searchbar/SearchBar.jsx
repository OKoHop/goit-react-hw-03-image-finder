export const SearchBar = ({ submitForm }) => {
  return (
    <div className="SearchBar">
      <form
        onSubmit={evt => {
          const value = evt.target.elements.search.value;
          if (!value) {
            evt.preventDefault();
            return alert('Enter search request!');
          }
          evt.preventDefault();
          submitForm(evt.target.elements.search.value);
          // evt.target.reset();
        }}
      >
        <input type="text" name="search" />
        <button type="submit" className="SearchForm-button-label">
          Search
        </button>
      </form>
    </div>
  );
};
