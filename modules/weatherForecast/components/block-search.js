const Search = () => {
  return `<div class="weather__search">
    <input
        class="weather__searchbar"
        type="search"
        data-value=""
        placeholder="Vyhledej město..."
    />
    <div class="autocomplete autocomplete--rounded"></div>
    </div>`;
};

export default Search;
