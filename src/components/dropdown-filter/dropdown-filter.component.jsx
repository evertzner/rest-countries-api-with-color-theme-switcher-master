import "./dropdown-filter.styles.scss";

const DropdownFilter = ({ filter, items, customClass }) => {
  return (
    <div className={`dropdown-filter-container ${customClass}`}>
      <select name={filter} defaultValue="">
        <option value="" disabled hidden>
          Filter by {filter}
        </option>
        <option value="all">All</option>
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
