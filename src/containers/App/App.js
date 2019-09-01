import React from 'react';
import Nav from "../../components/Nav/Nav.js";
import Intro from "../../components/Intro/Intro.js";
import Desc from "../../components/Desc/Desc.js";
import Skills from "../../components/Skills/Skills.js";
import Projects from "../../components/Projects/Projects.js";
import './App.css';
import Particles from "react-particles-js";

const particlesOptions = {
  particles: {
    number: {
      value: 85,
      density: {
        enable: false,
        value_area:2000
      }
    }
  }
}

class App extends React.Component {
  render(){ 
    return (
      <div className="App">
      <Particles params={{particlesOptions}} className="particles"/>
        <Nav/>
        <Intro/>
        <Desc/>
        <Skills/>
        <Projects/>
                {/*<Contacts/>
                <Footer/>*/}
      </div>
    );
  }
}
export default App;
