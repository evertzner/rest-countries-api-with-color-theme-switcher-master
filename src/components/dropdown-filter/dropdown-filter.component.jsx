import { useState, useEffect } from "react";

import "./dropdown-filter.styles.scss";

const DropdownFilter = ({ filter, items, customClass, onChanged }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      onChanged(query);
    }, 500);
    return () => clearTimeout(timeOutId);
  }, [query]);

  const onSearchChanged = (e) => {
    console.log(e.target.value);
    setQuery(e.target.value);
    //onChanged(e.target.value);
  };

  return (
    <div className={`dropdown-filter-container ${customClass}`}>
      <select name={filter} defaultValue="" onChange={onSearchChanged}>
        <option value="" hidden>
          Filter by {filter}
        </option>
        <option value="All">All</option>
        {items.map((x) => (
          <option key={x} value={x}>
            {x}
          </option>
        ))}
      </select>
      <div className="dropdown-filter-container__custom-arrow">
        <span>
          <ion-icon name="chevron-down-outline"></ion-icon>
        </span>
      </div>
    </div>
  );
};

export default DropdownFilter;
