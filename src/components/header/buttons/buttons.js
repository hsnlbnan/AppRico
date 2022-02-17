import React from "react";
import searchIcon from "../../../assets/icons/search.svg";
import userIcon from "../../../assets/icons/user.svg";
import worldIcon from "../../../assets/icons/world.svg";
function Buttons() {
  return (
    <div className="menuRight">
      <a href="">I want to be seller</a>
      <ul className="menuRight-buttons">
        <li className="menuRight-buttons_item">
          <a href="">
            <img src={searchIcon} alt="Search Icon" />
          </a>
        </li>
        <li className="menuRight-buttons_item">
          <a href="">
            <img src={worldIcon} alt="World Icon" />
          </a>
        </li>
        <li className="menuRight-buttons_item">
          <a href="">
            <img src={userIcon} alt="User Icon" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Buttons;
