import * as actions from "./actionTypes";

export function addSmurf(newSmurf) {
  return {
    type: actions.ADD_SMURF,
    payload: newSmurf
  };
}

export function fetchSmurf() {
  return {
    type: actions.FETCH_SMURFS
  };
}
