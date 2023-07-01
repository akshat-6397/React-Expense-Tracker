import React from "react";
export const RupeeIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={props.height}
      viewBox="0 -960 960 960"
      width={props.width}
    >
      <path d="M564-120 290-404v-66h130q57 0 100-37t50-103H240v-60h325q-13-48-53.5-79T420-780H240v-60h480v60H566q23 20 39 51t23 59h92v60h-90q-8 91-67.5 145.5T420-410h-52l279 290h-83Z" 
        style={{fill: props.color?props.color:"#000000", strokeWidth: 4}}
      />
    </svg>
  );
};
