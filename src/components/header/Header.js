import React from "react";
import Logo from "./logo/Logo";
import Menu from "./menu/Menu";
import Buttons from "./buttons/buttons";

function Header() {
  return (
    <header>
      <Logo />
      <Menu />
      <Buttons />
    </header>
  );
}

export default Header;
