import PropTypes from "prop-types";
import Search from "./SearchForRecipe/Search";
import Results from "./SearchForRecipe/Results";
import ButtonLink from "./SearchForRecipe/ButtonLink";
const Ingredients = ({ setAddIngredients }) => {
  return (
    <main className="main">
      <Search setAddIngredients={setAddIngredients} />
      <Results />
      <ButtonLink />
    </main>
  );
};

Ingredients.propTypes = {
  setAddIngredients: PropTypes.func.isRequired,
};

export default Ingredients;
