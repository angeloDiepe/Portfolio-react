import React from 'react';
import Nav from "../../components/Nav/Nav.js";
import Intro from "../../components/Intro/Intro.js";
import Desc from "../../components/Desc/Desc.js";
import Skills from "../../components/Skills/Skills.js";
import Projects from "../../components/Projects/Projects.js";
import Contacts from "../../components/Contacts/Contacts.js";
import Aux from "../hoc/Aux.js"
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
      <Aux>
        <Particles params={{particlesOptions}} className="particles"/>
        <Nav/>
        <div className="App">
          <Intro/>
          <Desc/>
          <Skills>
            <Particles params={{particlesOptions}} className="particles"/>
          </Skills>
           <Projects>
            <Particles params={{particlesOptions}} className="particles"/>
          </Projects>
          <Contacts/>
        </div>
      </Aux>
    );
  }
}
export default App;
