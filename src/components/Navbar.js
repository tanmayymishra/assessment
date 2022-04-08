import React, { useState } from "react";

export const Navbar = () => {
  const [navBtn, setNavBtn] = useState(false);
  const [navBtn1, setNavBtn1] = useState(false);
  const [navBtn2, setNavBtn2] = useState(true);
  const [navBtn3, setNavBtn3] = useState(false);
  const [navBtn4, setNavBtn4] = useState(false);
  const [navBtn5, setNavBtn5] = useState(false);
  const [navBtn6, setNavBtn6] = useState(false);

  return (
    <div className="navbar">
      <button
        className="navBtn"
        onClick={() => {
          navBtn ? setNavBtn(false) : setNavBtn(true);
        }}
        className={navBtn ? "navBtn clicked" : "navBtn"}
      >
        🔥 24 Trending
      </button>
      <button
        className="navBtn1"
        onClick={() => {
          navBtn1 ? setNavBtn1(false) : setNavBtn1(true);
        }}
        className={navBtn1 ? "navBtn1 clicked" : "navBtn1"}
      >
        Latest shows
      </button>
      <button
        className="navBtn2"
        onClick={() => {
          navBtn2 ? setNavBtn2(false) : setNavBtn2(true);
        }}
        className={navBtn2 ? "navBtn2 clicked" : "navBtn2"}
      >
        Most Popular
      </button>
      <button
        className="navBtn3"
        onClick={() => {
          navBtn3 ? setNavBtn3(false) : setNavBtn3(true);
        }}
        className={navBtn3 ? "navBtn3 clicked" : "navBtn3"}
      >
        💎 In Genesis
      </button>
      <button
        className="navBtn4"
        onClick={() => {
          navBtn4 ? setNavBtn4(false) : setNavBtn4(true);
        }}
        className={navBtn4 ? "navBtn4 clicked" : "navBtn4"}
      >
        🛕 In Temple
      </button>
      <button
        className="navBtn5"
        onClick={() => {
          navBtn5 ? setNavBtn5(false) : setNavBtn5(true);
        }}
        className={navBtn5 ? "navBtn5 clicked" : "navBtn5"}
      >
        🌪️ In Void
      </button>
      <button
        className="navBtn6"
        onClick={() => {
          navBtn6 ? setNavBtn6(false) : setNavBtn6(true);
        }}
        className={navBtn6 ? "navBtn6 clicked" : "navBtn6"}
      >
        🦍 #BAYC
      </button>
    </div>
  );
};
