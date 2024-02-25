import "../scss/App.scss";

function App() {
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
        <a className="mainLanding__startBtn" href="">
          Empezar{" "}
        </a>
        {/* (siguiente pagina) */}
      </main>

      <header className="header">
        <h1 className="header__title">Cocinar con lo que tengo</h1>
      </header>

      <main className="main">
        <section className="main__sectionOne">
          <form className="main__sectionOne--form">
            <label className="main__sectionOne--form--label" htmlFor="text">
              Añade tus ingredientes uno a uno
            </label>
            <div className="main__sectionOne--form--container">
              <input
                className="main__sectionOne--form--container--input"
                type="text"
                name="text"
                id="text"
                placeholder="Ej:Zanahoria"
              />
              <input
                className="main__sectionOne--form--container--button"
                type="submit"
                value="Añadir"
              />
            </div>
          </form>
        </section>
        <section className="main__sectionTwo">
          <p className="main__sectionTwo--selectedIngredients">
            Ingredientes seleccionados:
          </p>
          <div className="main__sectionTwo--box" ></div>
        </section>
        <div className="main__sectionThree">
          <button className="main__sectionThree--btn">Buscar recetas</button>
        </div>
      </main>
      <footer className="footer">&copy; by SaraSzCr</footer>
    </div>
  );
}

export default App;
