import "../scss/App.scss";
import "../scss/LandingApp.scss";

import Filter from "./Filter";
import Footer from "./Footer";
import Header from "./Header";
import LandingApp from "./LandingApp";
import Results from "./Results";
import ButtonLink from "./buttonLink";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<LandingApp />} />

        <Route
          path="/main"
          element={
            <main className="main">
              <Filter />

              <Results />

              <ButtonLink />
            </main>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
