import React from "react";
import Logo from "../../components/header/logo/Logo";

function Footer() {
  return (
    <footer>
      <div className="footer-menu_container">
        <ul className="footer-menu">
          <li className="footer-menu_list">
            <h4 className="footer-menu_list_title">COMPANY</h4>
            <a className="footer-menu_list_item" href="#">
              About
            </a>
          </li>
          <li className="footer-menu_list">
            <a className="footer-menu_list_item" href="#">
              Contact
            </a>
          </li>
          <li className="footer-menu_list">
            <a className="footer-menu_list_item" href="#">
              Careers
            </a>
          </li>
          <li className="footer-menu_list">
            <a className="footer-menu_list_item" href="#">
              Help & FAQ
            </a>
          </li>
          <li className="footer-menu_list">
            <a className="footer-menu_list_item" href="#">
              Terms
            </a>
          </li>
          <li className="footer-menu_list">
            <a className="footer-menu_list_item" href="#">
              Privacy
            </a>
          </li>
        </ul>
        <ul className="footer-menu">
          <li className="footer-menu_list">
            <h4 className="footer-menu_list_title">CATEGORIES</h4>
            <a className="footer-menu_list_item" href="#">
              Cars
            </a>
          </li>
          <li className="footer-menu_list">
            <a className="footer-menu_list_item" href="#">
              Tachts
            </a>
          </li>
          <li className="footer-menu_list">
            <a className="footer-menu_list_item" href="#">
              Helicopters
            </a>
          </li>
        </ul>
        <ul className="footer-menu">
          <li className="footer-menu_list">
            <h4 className="footer-menu_list_title">OTHER COUNTries</h4>
            <a className="footer-menu_list_item" href="#">
              Qatar
            </a>
          </li>
          <li className="footer-menu_list">
            <a className="footer-menu_list_item" href="#">
              Dubai
            </a>
          </li>
          <li className="footer-menu_list">
            <a className="footer-menu_list_item" href="#">
              Kuwait
            </a>
          </li>
          <li className="footer-menu_list">
            <a className="footer-menu_list_item" href="#">
              Bahrain
            </a>
          </li>
          <li className="footer-menu_list">
            <a className="footer-menu_list_item" href="#">
              Abu Dhai
            </a>
          </li>
        </ul>
        <ul className="footer-menu">
          <li className="footer-menu_list">
            <h4 className="footer-menu_list_title">Social Media</h4>
            <a className="footer-menu_list_item" href="#">
              Tiktok
            </a>
          </li>
          <li className="footer-menu_list">
            <a className="footer-menu_list_item" href="#">
              İnstagram
            </a>
          </li>
          <li className="footer-menu_list">
            <a className="footer-menu_list_item" href="#">
              Facebook
            </a>
          </li>
        </ul>
        <ul className="footer-menu">
          <li className="footer-menu_list">
            <h4 className="footer-menu_list_title">Support</h4>
            <a className="footer-menu_list_item" href="#">
              Help
            </a>
          </li>
          <li className="footer-menu_list">
            <a className="footer-menu_list_item" href="#">
              Contact Us
            </a>
          </li>
        </ul>
        <ul className="footer-menu">
          <li className="footer-menu_list">
            <h4 className="footer-menu_list_title">Language</h4>
            <a className="footer-menu_list_item" href="#">
              English
            </a>
          </li>
          <li className="footer-menu_list">
            <a className="footer-menu_list_item" href="#">
              Arabic
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-copryright">
        <Logo />
        <span className="copryrightText">Copyright © 2021 MOTOVAGO</span>
      </div>
    </footer>
  );
}

export default Footer;
