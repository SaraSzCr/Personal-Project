import "../scss/App.scss";
import "../scss/LandingApp.scss";
import { Link } from "react-router-dom";

function LandingApp() {
  return (
    <div>
      {/* <img src="" alt="Imagen Hero" /> */}

      <header className="header__landing">
        <h1 className="header__landing--title">Cocinar con lo que tengo</h1>
      </header>

      <main className="main__landing">
        <p className="main__landing--desc">
          ¿No sabes qué comer? ¿No tienes tiempo para ir hoy a la compra? Con
          esta app, vamos a crear recetas fáciles.
          <strong>¡Con los ingredientes que ya tienes en casa!</strong>
        </p>
        <Link className="main__landing--startBtn" to="/App">
          Empezar{" "}
        </Link>

        {/* (siguiente pagina) */}
      </main>

      <footer className="footer__landing">&copy; by SaraSzCr</footer>
    </div>
  );
}

export default LandingApp;
