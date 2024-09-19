//Components
import { NavbarContainer } from "./Navbar.style";
//Images
import logo from "../../../assets/logo/IMG-20240204-WA0003.jpg";
import { flags } from "./Flags";
//Packages
import { RefObject, useState } from "react";

interface NavbarProps {
  isAtTop: boolean;
  scrollToItem: (itemName: string) => void;
  navbarRef: RefObject<HTMLDivElement>;
  setSelectedLanguage: (item: string) => void;
  selectedLanguage: string;
}

export const Navbar = ({
  isAtTop,
  scrollToItem,
  navbarRef,
  setSelectedLanguage,
  selectedLanguage,
}: NavbarProps) => {
  console.log(selectedLanguage);
  return (
    <NavbarContainer ref={navbarRef} className={`navbar`}>
      <div className="logo-container">
        <div className="inner-logo-container">
          <img src={logo} alt="logo" />
          <div className="title-container">
            <h2>BODYGUARD</h2>
            <h2>SERVICES TURKEY</h2>
          </div>
        </div>
      </div>
      <div className="list-container">
        <div className="inner-list-container">
          <ul>
            <li>
              <h3
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Home Page
              </h3>
            </li>
            <li>
              <h3 onClick={() => scrollToItem("aboutUs")}>About Us</h3>
            </li>
            <li>
              <h3 onClick={() => scrollToItem("services")}>Services</h3>
            </li>
            <li>
              <h3>References</h3>
            </li>
            <li>
              <h3>Contact</h3>
            </li>
          </ul>
        </div>
      </div>
      <div className="flag-container">
        <img
          onClick={() => setSelectedLanguage("english")}
          src={flags.UKingdomFlag}
          className={`${selectedLanguage === "english" ? "active" : ""}`}
        />
        <img
          onClick={() => setSelectedLanguage("turkish")}
          src={flags.TurkeyFlag}
          className={`${selectedLanguage === "turkish" ? "active" : ""}`}
        />
        <img
          onClick={() => setSelectedLanguage("german")}
          src={flags.GermanyFlag}
          className={`${selectedLanguage === "german" ? "active" : ""}`}
        />
        <img
          onClick={() => setSelectedLanguage("russian")}
          src={flags.RussianFlag}
          className={`${selectedLanguage === "russian" ? "active" : ""}`}
        />
        <img
          onClick={() => setSelectedLanguage("arabic")}
          src={flags.SaudiArabicFlag}
          className={`${selectedLanguage === "arabic" ? "active" : ""}`}
        />
        <img
          onClick={() => setSelectedLanguage("ukraine")}
          src={flags.UkraineFlag}
          className={`${selectedLanguage === "ukraine" ? "active" : ""}`}
        />
        <img
          onClick={() => setSelectedLanguage("italian")}
          src={flags.ItalianFlag}
          className={`${selectedLanguage === "italian" ? "active" : ""}`}
        />
        <img
          onClick={() => setSelectedLanguage("persian")}
          src={flags.IranFlag}
          className={`${selectedLanguage === "persian" ? "active" : ""}`}
        />
      </div>
    </NavbarContainer>
  );
};
