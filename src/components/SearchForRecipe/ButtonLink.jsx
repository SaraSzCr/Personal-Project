import { Link } from "react-router-dom";
function ButtonLink() {
  return (
    <section className="search__sectionThree">
      <button className="search__sectionThree--btn">Buscar recetas</button>

      <Link className="btn_return" to="/">
        {" "}
        Volver
      </Link>
    </section>
  );
}

export default ButtonLink;
