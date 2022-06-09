import "./dropdown-filter.styles.scss";

const DropdownFilter = ({ filter, items, onChanged }) => {
  const onSearchChanged = (e) => {
    onChanged(e.target.value);
  };

  return (
    <div className="dropdown-filter-container">
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
