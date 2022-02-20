import React, { useState } from "react";
import searchIcon from "../../../assets/icons/search.svg";
import userIcon from "../../../assets/icons/user.svg";
import worldIcon from "../../../assets/icons/world.svg";
import menuOpen from "../../../assets/icons/menu-open.svg";
import menuClose from "../../../assets/icons/menu-close.svg";
import Menu from "../menu/Menu";
import Search from "../buttons/search";
function Buttons() {
  const [openMenu, setOpenMenu] = useState(false);
  const [show, setShow] = useState(false);

  const toggleMenu = () => setOpenMenu((openMenu) => !openMenu);
  const closeButton = () => `right-menu float-right ${openMenu ? "open" : ""}`;
  const mobileMenu = () => `hamburger_img ${openMenu ? "close" : ""}`;
  return (
    <div className="menuRight">
      <a href="!#">I want to be seller</a>
      <ul className="menuRight-buttons">
        <li className="menuRight-buttons_item">
          <a onClick={() => setShow(!show)}>
            <img src={searchIcon} alt="Search Icon" />
          </a>
          <Search show={show} />
        </li>
        <li className="menuRight-buttons_item">
          <a href="!#">
            <img src={worldIcon} alt="World Icon" />
          </a>
        </li>
        <li className="menuRight-buttons_item">
          <a href="!#">
            <img src={userIcon} alt="User Icon" />
          </a>
        </li>
        <li className="menuRight-buttons_item last-child">
          <div className={mobileMenu()} onClick={toggleMenu}>
            <img src={menuOpen} alt="Menu bar" />
          </div>
          <div className={closeButton()}>
            <div className="closeIcon" onClick={toggleMenu}>
              <img src={menuClose} alt="Menu Close" />
            </div>
            <ul className="mobileMenu">
              <Menu />
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Buttons;
