import React from "react";
import verify from "./images/verify.png";
export const Header = () => {
  return (
    <div className="header">
      <h1>Live Spaces</h1>
      <div className="subHeader">
        <img src={verify} alt="verify" className="verifyBtn" />
        All NFT's on Cyber either belong to or were minted by their space
        creator.
      </div>
    </div>
  );
};
