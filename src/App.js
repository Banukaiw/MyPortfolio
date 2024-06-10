import Navbar from "./components/Navbar/navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/Skills/skills";
import About from "./components/About/about";
//import Test from "./components/test/test";
import Services from "./components/services/services";
import '@fortawesome/fontawesome-free/css/all.css';
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
//import Test2 from "./components/test/test2";

function App() {
  return (
    <div className="App">
     <Navbar/> 
  {/*  <Test/>  */}
      {/* <Test2/> */}
      <Intro/>
        <Skills/>
  <About/>  
       <Services/>
      <Portfolio/> 
      <Contact/> 
       
       {/* <App1/> */}
       
     
    </div>
  );
}

export default App;
