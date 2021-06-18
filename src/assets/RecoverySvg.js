import React from "react";

const SVGComponent = (props) => (
  <svg width={60} height={60} fill="inherit" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30 .667a2.667 2.667 0 0 1 2.667 2.666V6a2.667 2.667 0 1 1-5.334 0V3.333A2.667 2.667 0 0 1 30 .667zM6.781 6.78a2.667 2.667 0 0 1 3.771 0l2.667 2.667a2.666 2.666 0 0 1-3.771 3.77l-2.667-2.666a2.667 2.667 0 0 1 0-3.77zm46.438 0a2.667 2.667 0 0 1 0 3.771l-2.667 2.667a2.666 2.666 0 1 1-3.77-3.771l2.666-2.667a2.666 2.666 0 0 1 3.77 0zM30 16.667a13.333 13.333 0 1 0 0 26.666 13.333 13.333 0 0 0 0-26.666zM.667 30a2.667 2.667 0 0 1 2.666-2.667H6a2.667 2.667 0 1 1 0 5.334H3.333A2.667 2.667 0 0 1 .667 30zm50.666 0A2.667 2.667 0 0 1 54 27.333h2.667a2.666 2.666 0 1 1 0 5.334H54A2.667 2.667 0 0 1 51.333 30zM9.448 46.781a2.666 2.666 0 0 1 3.77 3.771l-2.666 2.667a2.667 2.667 0 0 1-3.77-3.771l2.666-2.667zm40 6.438-2.667-2.667a2.667 2.667 0 0 1 3.771-3.77l2.667 2.666a2.666 2.666 0 0 1-3.771 3.77zM30 51.333A2.667 2.667 0 0 1 32.667 54v2.667a2.666 2.666 0 1 1-5.334 0V54A2.667 2.667 0 0 1 30 51.333z"
      fill="inherit"
    />
    <path d="M30 14a16 16 0 1 0 0 32 16 16 0 0 0 0-32z" fill="inherit" />
  </svg>
);

export default SVGComponent;