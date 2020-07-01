import React from "react";
import "./header.scss";

export default function Header() {
  const menu = [
    "HOME",
    "STYLEDEMO",
    "FULLWITH",
    "DROPWN",
    "RPOTFOLO",
    "GALLERY",
  ];
  return (
    <div className="header">
      <div className="header__top" />
      <div className="header__menu">
        <div className="header__menu__logo">
          <h2>The Modernist</h2>
          <p>Free PSD Website Templace</p>
        </div>
        {menu.map((item, index) => (
          <li className="active" key={index}>
            {item}
          </li>
        ))}
      </div>
    </div>
  );
}
