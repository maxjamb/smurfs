import { connect } from "react-redux";
import React from "react";
import Smurf from "./Smurf";

function SmurfList({ smurfs }) {
  console.log(smurfs);
  return (
    <div>
      <div className="list">
        {smurfs.map(smurf => {
          return <Smurf smurf={smurf} />;
        })}
      </div>
    </div>
  );
}

export default SmurfList;
