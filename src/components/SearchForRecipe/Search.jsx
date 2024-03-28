import PropTypes from "prop-types";

function Search({setAddIngredients}) {
  const handleInputAddIngredients = (event) => {
    setAddIngredients(event.currentTarget.value);
  };
  return (
    <section className="search__sectionOne">
      <form className="search__sectionOne--form">
        <label className="search__sectionOne--form--label" htmlFor="text">
          Añade tus ingredientes uno a uno
        </label>
        <div className="search__sectionOne--form--container">
          <input
            className="search__sectionOne--form--container--input"
            type="text"
            name="text"
            id="text"
            placeholder="Ej:Zanahoria"
            onChange={handleInputAddIngredients}
          />
          <input
            className="search__sectionOne--form--container--button"
            type="submit"
            value="+"
          />
        </div>
      </form>
    </section>
  );
}

Search.propTypes = {
  setAddIngredients: PropTypes.func.isRequired,
};

export default Search;
