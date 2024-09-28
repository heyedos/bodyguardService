//Components
import { NavbarContainer } from "./Navbar.style";
//Images
import logo from "../../../assets/logo/IMG-20240204-WA0003.jpg";
import wpIcon from "../../../assets/logo/wpIcon.png";
import arrowIcon from "../../../assets/logo/arrowIcon.png";
import { flags } from "./Flags";
//Packages
import { RefObject, useEffect, useRef, useState } from "react";

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
  const [isArrowOpen, setIsArrowOpen] = useState<boolean>(false);
  const useSize = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
      const windowSizeHandler = () => {
        setWindowWidth(window.innerWidth);
      };
      window.addEventListener("resize", windowSizeHandler);
      return () => {
        window.removeEventListener("resize", windowSizeHandler);
      };
    }, []);
    return windowWidth;
  };
  const windowSize = useSize();
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
      <div className="list-container-2">
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
              <h3 onClick={() => scrollToItem("references")}>References</h3>
            </li>
            <li className="wpIcon">
              <h3 onClick={() => scrollToItem("footer")}>Contact</h3>
              <div className="rightIcons">
                <div className="wpDiv">
                  <a href="https://wa.me/905438818113">
                    <img
                      src={wpIcon}
                      alt="whatshapp icon"
                      /* onClick={() => {
                    setNumberOpen((e) => !e);
                  }} */
                    />
                  </a>
                </div>
                <div className="arrows">
                  {windowSize < 1000 && !isArrowOpen && (
                    <div>
                      <img
                        src={arrowIcon}
                        alt=""
                        className="arrowIcon"
                        onClick={() => {
                          setIsArrowOpen(true);
                        }}
                      />
                    </div>
                  )}
                  {windowSize < 1000 && isArrowOpen && (
                    <div>
                      <img
                        src={arrowIcon}
                        alt=""
                        className="arrowIcon close"
                        onClick={() => {
                          setIsArrowOpen(false);
                        }}
                      />
                    </div>
                  )}
                </div>
                {isArrowOpen && windowSize < 1000 && (
                  <div className="flag-container flagW">
                    <img
                      onClick={() => setSelectedLanguage("english")}
                      src={flags.UKingdomFlag}
                      className={`${
                        selectedLanguage === "english" ? "active" : ""
                      }`}
                    />
                    <img
                      onClick={() => setSelectedLanguage("turkish")}
                      src={flags.TurkeyFlag}
                      className={`${
                        selectedLanguage === "turkish" ? "active" : ""
                      }`}
                    />
                    <img
                      onClick={() => setSelectedLanguage("german")}
                      src={flags.GermanyFlag}
                      className={`${
                        selectedLanguage === "german" ? "active" : ""
                      }`}
                    />
                    <img
                      onClick={() => setSelectedLanguage("russian")}
                      src={flags.RussianFlag}
                      className={`${
                        selectedLanguage === "russian" ? "active" : ""
                      }`}
                    />
                    <img
                      onClick={() => setSelectedLanguage("arabic")}
                      src={flags.SaudiArabicFlag}
                      className={`${
                        selectedLanguage === "arabic" ? "active" : ""
                      }`}
                    />
                    <img
                      onClick={() => setSelectedLanguage("ukraine")}
                      src={flags.UkraineFlag}
                      className={`${
                        selectedLanguage === "ukraine" ? "active" : ""
                      }`}
                    />
                    <img
                      onClick={() => setSelectedLanguage("italian")}
                      src={flags.ItalianFlag}
                      className={`${
                        selectedLanguage === "italian" ? "active" : ""
                      }`}
                    />
                    <img
                      onClick={() => setSelectedLanguage("persian")}
                      src={flags.IranFlag}
                      className={`${
                        selectedLanguage === "persian" ? "active" : ""
                      }`}
                    />
                    <img
                      onClick={() => setSelectedLanguage("chinese")}
                      src={flags.chineseFlag}
                      className={`${
                        selectedLanguage === "chinese" ? "active" : ""
                      }`}
                    />
                    <img
                      onClick={() => setSelectedLanguage("french")}
                      src={flags.frenchFlag}
                      className={`${
                        selectedLanguage === "french" ? "active" : ""
                      }`}
                    />
                    <img
                      onClick={() => setSelectedLanguage("greece")}
                      src={flags.greeceFlag}
                      className={`${
                        selectedLanguage === "greece" ? "active" : ""
                      }`}
                    />
                    <img
                      onClick={() => setSelectedLanguage("japon")}
                      src={flags.japonFlag}
                      className={`${
                        selectedLanguage === "japon" ? "active" : ""
                      }`}
                    />
                    <img
                      onClick={() => setSelectedLanguage("korean")}
                      src={flags.koreanFlag}
                      className={`${
                        selectedLanguage === "korean" ? "active" : ""
                      }`}
                    />
                    <img
                      onClick={() => setSelectedLanguage("pakistan")}
                      src={flags.pakistanFlag}
                      className={`${
                        selectedLanguage === "pakistan" ? "active" : ""
                      }`}
                    />
                    <img
                      onClick={() => setSelectedLanguage("romanian")}
                      src={flags.romanianFlag}
                      className={`${
                        selectedLanguage === "romanian" ? "active" : ""
                      }`}
                    />
                  </div>
                )}
              </div>

              {/* {numberOpen && <p className="popupNumber">+90 543 881 8113</p>} */}
            </li>
          </ul>
        </div>
      </div>
      {windowSize > 1000 && (
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
          <img
            onClick={() => setSelectedLanguage("chinese")}
            src={flags.chineseFlag}
            className={`${selectedLanguage === "chinese" ? "active" : ""}`}
          />
          <img
            onClick={() => setSelectedLanguage("french")}
            src={flags.frenchFlag}
            className={`${selectedLanguage === "french" ? "active" : ""}`}
          />
          <img
            onClick={() => setSelectedLanguage("greece")}
            src={flags.greeceFlag}
            className={`${selectedLanguage === "greece" ? "active" : ""}`}
          />
          <img
            onClick={() => setSelectedLanguage("japon")}
            src={flags.japonFlag}
            className={`${selectedLanguage === "japon" ? "active" : ""}`}
          />
          <img
            onClick={() => setSelectedLanguage("korean")}
            src={flags.koreanFlag}
            className={`${selectedLanguage === "korean" ? "active" : ""}`}
          />
          <img
            onClick={() => setSelectedLanguage("pakistan")}
            src={flags.pakistanFlag}
            className={`${selectedLanguage === "pakistan" ? "active" : ""}`}
          />
          <img
            onClick={() => setSelectedLanguage("romanian")}
            src={flags.romanianFlag}
            className={`${selectedLanguage === "romanian" ? "active" : ""}`}
          />
        </div>
      )}
    </NavbarContainer>
  );
};
