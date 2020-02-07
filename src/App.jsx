import React, { Component } from "react";

import Content from "./Content";
import NavBar from "./NavBar";

/*
  Remember when passing around variable and functions

  If you want componenets down the tree to VIEW your 
  variable, simply pass that varaible

  If you want componenets down the tree to MODIFY your
  varaible, then pass a function down the tree that allows
  the components to modify it as needed

  The function should be made in the Component that "owns" that 
  varaible, as in which Component has it as part of its state
  because only that component can modify its own state.
  Pass variables and functions into Components like so:

    <Componenet var={value} func={value}/>

  IMPORTANT: DO NOT CALL THE FUNCTION

  func={function}   WORKS
  func={function()} DOES NOT WORK, This is calling the function 
                                   and storing the return value

  To get the passed variables and functions from inside 
  the Componenet call `this.props.<NAME>`
*/
class App extends Component {
  state = {};

  render() {
    return (
      <div className="app">
        <NavBar />
        <Content />
      </div>
    );
  }
}

export default App;
