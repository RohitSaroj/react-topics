import React, { useReducer } from "react";

// 1. Define initial state
const initialState = {
  name: "",
  address: "",
  age: "",
};

// 2. Define reducer
function reducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_ADDRESS":
      return { ...state, address: action.payload };
    case "SET_AGE":
      return { ...state, age: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export default function ReducerDemo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>User Form</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Enter Address"
        value={state.address}
        onChange={(e) =>
          dispatch({ type: "SET_ADDRESS", payload: e.target.value })
        }
      />

      <input
        type="number"
        placeholder="Enter Age"
        value={state.age}
        onChange={(e) => dispatch({ type: "SET_AGE", payload: e.target.value })}
      />

      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>

      <div style={{ marginTop: "1rem" }}>
        <strong>Preview:</strong>
        <p>Name: {state.name}</p>
        <p>Address: {state.address}</p>
        <p>Age: {state.age}</p>
      </div>
    </div>
  );
}
