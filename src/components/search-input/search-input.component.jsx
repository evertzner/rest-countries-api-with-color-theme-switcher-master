import { useState, useEffect } from "react";

import "./search-input.styles.scss";

const SearchInput = ({ filter, customClass, onChanged }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      onChanged(query);
    }, 500);
    return () => clearTimeout(timeOutId);
  }, [query]);

  const onSearchChanged = (e) => {
    setQuery(e.target.value);
  };

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
        onChange={onSearchChanged}
      />
    </div>
  );
};

export default SearchInput;
