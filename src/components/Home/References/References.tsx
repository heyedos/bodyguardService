//Styling
import { ReferencesContainer } from "./References.style";
//Images
import { RefImages } from "./ReferencesImages";
import { RefObject, useEffect, useState } from "react";

interface referencesProps {
  referencesRef: RefObject<HTMLDivElement>;
}

export const References = ({ referencesRef }: referencesProps) => {
  return (
    <ReferencesContainer ref={referencesRef}>
      <div className="inner-container">
        <div className="title-container">
          <h1>References</h1>
        </div>
        <div className="bottom-container">
          <div className="images-container">
            {RefImages.map((key) => (
              <img src={key} alt={key} className="refImages" />
            ))}
          </div>
        </div>
      </div>
    </ReferencesContainer>
  );
};
