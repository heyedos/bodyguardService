import { RefObject } from "react";
import { FooterContainer } from "./Footer.style";

interface footerProps {
  footerRef: RefObject<HTMLDivElement>;
}

export const Footer = ({ footerRef }: footerProps) => {
  return (
    <FooterContainer ref={footerRef}>
      <div className="Footer">
        <h3>Contact Us</h3>
        <div className="footer-container">
          <div className="contact">
            <p>
              Email:{" "}
              <a href="mailto:a.s._1905@hotmail.com">a.s._1905@hotmail.com</a>
            </p>
            <p>Phone Number: +90 543 881 8113 </p>
          </div>
          <div className="adress">
            <p>
              Adress: Atatürk Mahallesi Hadımköy Yolu Caddesi 10/13 Kıraç
              Esenyurt İstanbul
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};
