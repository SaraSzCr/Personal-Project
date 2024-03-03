import { Link } from "react-router-dom";
function ButtonLink() {
  return (
    <section className="main__sectionThree">
      <button className="main__sectionThree--btn">Buscar recetas</button>

      <Link className="btn_return" to="/">
        {" "}
        Volver
      </Link>
    </section>
  );
}

export default ButtonLink;
