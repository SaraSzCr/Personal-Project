import "../scss/App.scss";

import Filter from "./Filter";
import Footer from "./Footer";
import Header from "./Header";
import Results from "./Results";
import ButtonLink from "./buttonLink";

function App() {
  return (
    <div>
     
<Header
/>
      <main className="main">
        <Filter />

        <Results />

        <ButtonLink />
      </main>
      <Footer/>
      
    </div>
  );
}

export default App;
