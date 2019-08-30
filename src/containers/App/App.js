import React from 'react';
import Nav from "../../components/Nav/Nav.js";
import './App.css';
import Particles from "react-particles-js";

class App extends React.Component {
  render(){ 
    return (
      <div className="App">
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
