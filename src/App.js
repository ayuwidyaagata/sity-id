import React from "react";
import Header from "./components/Header";
import Feature from "./components/Feature";
import About from "./components/About";
import aboutimage from "./assets/about.png";
import aboutimage1 from "./assets/download.png";
import Presentation from "./components/Presentation";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <About image={aboutimage} title='Ayok download gitu aja lah' button='Get the App' />
      <Presentation />
      <About image={aboutimage1} title='Ayok download gitu aja lah' button='Get the App' />
      <Contact />
    </div>
  );
}

export default App;
