import React from "react";
import Quote from "./Components/Quote";
import "./styles.css";
import Button from "./Components/Button";
import Input from "./Components/Input";
import Profile from "./Components/Profile";

export default function App() {
  return (
    <div className="App">
      <h1>Meet Chuck Norris</h1>
      <Profile />
      <Quote />
      <Button />
    </div>
  );
}
