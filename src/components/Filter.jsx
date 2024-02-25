function Filter() {
  return (
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
  );
}

export default Filter;
