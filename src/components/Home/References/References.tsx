//Styling
import { ReferencesContainer } from "./References.style";
//Images

import { RefObject, useEffect, useState } from "react";

interface referencesProps {
  referencesRef: RefObject<HTMLDivElement>;
}

export const References = ({ referencesRef }: referencesProps) => {
  return (
    <ReferencesContainer ref={referencesRef}>
      <div className="inner-container">
        <div className="title-container">
          <h1>sa</h1>
        </div>
        <div className="bottom-container">
          <div className="text-button-container"></div>
        </div>
      </div>
    </ReferencesContainer>
  );
};
