import React, { useContext } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "../styles/bar.scss";
import { UrlContext } from "../context/UrlContext";
function Bar(props) {
  const { back, forward } = props;
  const { url, setUrl } = useContext(UrlContext);
  console.log(url);

  const goHome = () => {
    console.log(url, 'evento')
    setUrl("https://www.google.com" + "?t=" + new Date().getTime());
  };

  return (
    <>
      <header className="header">
        <button className="home__button" onClick={goHome}>
          <AiOutlineHome />
        </button>
        <div className="direction__buttons">
        <button className="direction__button">
          <IoIosArrowBack onClick={back} />
        </button>
        <button className="direction__button" onClick={forward}>
          <IoIosArrowForward />
        </button>
        </div>
      </header>
    </>
  );
}

export default Bar;
