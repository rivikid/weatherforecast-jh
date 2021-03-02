const Search = () => {
  return `<div class="weather__searchbar">
    <input
        class="weather__search"
        type="text"
        data-value=""
        placeholder="Vyhledej město..."
    />
    <div class="autocomplete"></div>
    </div>`;
};

export default Search;
