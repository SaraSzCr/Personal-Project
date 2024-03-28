import "../scss/App.scss";
import "../scss/LandingApp.scss";
import { Link } from "react-router-dom";
// import Footer from "./Footer";
// import Header from "./Header";

function LandingApp() {
  return (
    <div>

      {/* <Header></Header> */}


      <main className="main__landing">
        <p className="main__landing--desc">
          ¿No sabes qué comer? ¿No tienes tiempo para ir hoy a la compra? Con
          esta app, vamos a crear recetas fáciles.
          <strong>¡Con los ingredientes que ya tienes en casa!</strong>
        </p>
        <Link className="main__landing--startBtn" to="/main"> Registrarse
          {/* Empezar{" "} */}
        </Link>
      </main>

      {/* <Footer></Footer> */}
    </div>
  );
}

export default LandingApp;
