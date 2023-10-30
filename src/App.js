// import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./Components/NavBar.js";
import { Banner } from "./Components/Banner.js";
import { Skills } from "./Components/Skills.js";
import { Projects } from "./Components/Projects.js";
import { Footer } from "./Components/Footer.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
