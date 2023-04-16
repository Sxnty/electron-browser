import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import "../styles/bar.scss";

function Bar() {
  return (
    <>
      <header className="header">
        <button className="home__button">
          <AiOutlineHome />
        </button>
      </header>
    </>
  );
}

export default Bar;
