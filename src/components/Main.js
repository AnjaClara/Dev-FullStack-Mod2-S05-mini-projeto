import React from "react";
import icon from "../images/google.png";
import Button from "./Button";
import Input from "./Input";
import "../styles/Main.css"

function Main(){

  return(
    <div className="main">
      <img className="icon" src={icon} alt="Cientist Icon"/>
      <Input propPT="Pesquise algo" propEN="Search Something"/>
      <div className="main-btn">
        <Button prop="Pesquisa Google" propUS="Google Search" propNumber={1} propBoolean/>
        <Button prop="Estou com sorte" propUS="I'm Lucky" propNumber={1} propBoolean/>
      </div>
    </div>
  );
}

export default Main;