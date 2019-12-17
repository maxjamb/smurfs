import React, { useState } from "react";

function AddSmurf({ smurfData, updateInput, smurfs }) {
  const [smurfData, setSmurfData] = useState({ name: "", height: "", age: "" });
  const addSmurf = smurfData => {
    return [...smurfs, smurfData.name, smurfData.height, smurfData.age];
  };
  return (
    <div className="smurf-container">
      <div className="smurf-form">
        <h2>Add Smurf</h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            addSmurf(smurfData);
          }}
        >
          <div>
            <input
              required
              placeholder="Name"
              value={smurfData.name}
              onChange={updateInput}
              name="name"
            />
          </div>
          <div>
            <input
              required
              placeholder="Height"
              value={smurfData.height}
              onChange={updateInput}
              name="height"
            />
          </div>
          <div>
            <input
              required
              placeholder="Age"
              type="number"
              value={smurfData.age}
              onChange={updateInput}
              name="age"
            />
          </div>
          <div>
            <button type="submit">Add Smurf</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddSmurf;
