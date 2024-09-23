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
              email:{" "}
              <a href="mailto:a.s._1905@hotmail.com">a.s._1905@hotmail.com</a>
            </p>
            <p>Phone Number: +90 543 881 8113 </p>
          </div>
          <div className="adress">
            <p>
              Adress: Atatürk mahallesi hadımköy yolu caddesi 10/13 kıraç
              esenyurt istanbul
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};
