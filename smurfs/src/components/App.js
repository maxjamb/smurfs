import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { connect } from "react-redux";
import { addSmurf } from "../store/actionCreators";

function App(props) {
  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        console.log(response);
        // setSmurfs(response.data);
      })
      .catch(error => {
        console.log("the data was not returned", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    smurfs: state
  };
};

export default connect(mapStateToProps, { addSmurf })(App);
