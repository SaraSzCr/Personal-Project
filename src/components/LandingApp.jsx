import "../scss/App.scss";
import { Link } from "react-router-dom";

function LandingApp() {

  return (

    <div>
    {/* <img src="" alt="Imagen Hero" /> */}

    <header className="header">
      <h1 className="header__title">Cocinar con lo que tengo</h1>
    </header>

    <main className="mainLanding">
      <p className="mainLanding__desc">
        ¿No sabes qué comer? ¿No tienes tiempo para ir hoy a la compra? Con
        esta app, vamos a crear recetas fáciles ¡con los ingredientes que ya
        tienes en casa!
      </p>
      <Link className="mainLanding__startBtn" to="/App">
        Empezar </Link>
  
      {/* (siguiente pagina) */}
    </main>

    <footer className="footer">&copy; by SaraSzCr</footer>
    </div>

  


    
  );
}

export default LandingApp;