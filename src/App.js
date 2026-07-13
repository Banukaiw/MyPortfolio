import Navbar from "./components/Navbar/navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/Skills/skills";
import About from "./components/About/about";
import Services from "./components/services/services";
import '@fortawesome/fontawesome-free/css/all.css';
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import Uproject from "./components/UProject/uproject";
import { Index } from "./components/index/Index";


function App() {
  return (
    <div className="App">
      <Index />
      <Navbar />
      <Intro />
      <Skills />
      <About />
      <Services />
      <Uproject />
      <Portfolio />
      <Contact />

    </div>
  );
}

export default App;
