import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useNameContext } from "../hooks/useNameContext";

const Login = () => {
  const { dispatch } = useNameContext(); // Access the dispatch function from the context
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Update the name in the global context using the dispatch function
    dispatch({ type: "SET_Name", payload: name });

    // Navigate to the "/game" route
    navigate("/game");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
