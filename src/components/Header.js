import React from "react";
import "../styles/Header.css"
import menu from "../images/menu.png";
import foto from "../images/foto.png";

function Header() {
  return (
    <div className="header">
      <ul>
        <li>
          <a href="https://mail.google.com/">Gmail</a>
        </li>
        <li>
          <a href="https://www.google.com/maps/">Maps</a>
        </li>
        <li>
          <img src={menu} alt="Menu" className="menu"/>
        </li>
        <li>
          <img src={foto} alt="Foto" className="foto" />
        </li>
      </ul>
    </div>
  );
}

export default Header;