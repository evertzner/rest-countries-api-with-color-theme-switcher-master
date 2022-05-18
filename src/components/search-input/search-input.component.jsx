import "./search-input.styles.scss";

const SearchInput = ({ filter, customClass }) => {
  return (
    <div className={`search-input-container ${customClass}`}>
      <span>
        <ion-icon name="search-outline"></ion-icon>
      </span>
      <input
        className="search-input-field"
        type="text"
        placeholder={`Search for ${filter}...`}
        name={filter}
      />
    </div>
  );
};

export default SearchInput;
