import React from 'react';
import Nav from "../../components/Nav/Nav.js";
import './App.css';
import Particles from "react-particles-js";

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
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
        {/*<Intro/>
                <Desc/>
                <Skills/>
                <Projects/>
                <Contacts/>
                <Footer/>*/}
      </div>
    );
  }
}
export default App;
