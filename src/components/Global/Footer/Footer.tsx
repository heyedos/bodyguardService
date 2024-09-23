import { RefObject } from "react";
import { FooterContainer } from "./Footer.style";

interface footerProps {
  footerRef: RefObject<HTMLDivElement>;
}

export const Footer = ({ footerRef }: footerProps) => {
  return (
    <FooterContainer ref={footerRef}>
      <div className="Footer">
        <h3>Contact</h3>
        <div className="footer-container">
          <div className="contact">
            <p>name surname</p>
            <p>Phone Number: +90 543 881 8113 </p>
          </div>
          <div className="adress">
            <p>email</p>
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
