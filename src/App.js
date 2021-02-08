import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="form_container">
      <form onSubmit={(values) => console.log(values)} className="form_element">
        <label className="labels">Email:</label>
        <input type="text" name="email" />
        <label className="labels">Password:</label>
        <input type="password" name="password" />
        <input className="labels" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default App;
