import "../scss/App.scss";
import "../scss/LandingApp.scss";
import "../scss/Search.scss";
import "../scss/Results.scss";

import Footer from "./mainApp/Footer";
import Header from "./mainApp/Header";
import LandingApp from "./LandingApp";
import Results from "./SearchForRecipe/Results";
import ButtonLink from "./SearchForRecipe/ButtonLink";
import { Route, Routes } from "react-router-dom";
import Search from "./SearchForRecipe/Search";

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
              <Search />

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
