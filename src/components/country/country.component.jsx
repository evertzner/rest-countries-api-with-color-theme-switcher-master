import "./country.styles.scss";

const Country = ({ country }) => {
  return (
    <div>
      <h2>{country.name}</h2>
    </div>
  );
};

export default Country;
