import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-wildCarZzz.png";
import "./Accueil.css";

const Accueil = () => {
  const [indexSlider, setIndexSlider] = useState(0);
  const [showText, setShowText] = useState(false);

  const array = [
    {
      src: "src/assets/voiturepasouf.jpg",
      description: "",
    },
    {
      src: "src/assets/voituregez.jpg",
      description: "",
    },
    {
      src: "src/assets/vroumvroum.jfif",
      description: "",
    },
    {
      src: "src/assets/tutu.jpg",
      description: "",
    },
    {
      src: "src/assets/letsgo.jpg",
      description: "",
    },
  ];

  const handlePrevious = () => {
    setShowText(false);
    if (indexSlider === 0) {
      setIndexSlider(array.length - 1);
    } else {
      setIndexSlider(indexSlider - 1);
    }
  };

  const handleNext = () => {
    setShowText(false);
    if (indexSlider === array.length - 1) {
      setIndexSlider(0);
    } else {
      setIndexSlider(indexSlider + 1);
    }
  };

  return (
    <div className="principal-div">
      <section className="logo-sizing">
        <img src={logo} alt="logo" id="logoCar" />
      </section>
      <section className="carousel-overall">
        <h1 className="title">Home</h1>
        <div className="globalContainer">
          <div className="container">
            <div>
              <img
                className="img-container-fluid blur"
                src={
                  array[
                    indexSlider - 1 < 0 ? array.length - 1 : indexSlider - 1
                  ].src
                }
                alt="name"
                key={indexSlider - 1 < 0 ? array.length - 1 : indexSlider - 1}
                onClick={handlePrevious}
                aria-hidden="true"
              />
            </div>
            <div className="div-container-fluid">
              <img
                className="img-container-fluid"
                src={array[indexSlider].src}
                alt="name"
                key={indexSlider}
                onClick={() => setShowText(!showText)}
                aria-hidden="true"
              />
              <p
                className={showText ? "show" : ""}
                onClick={() => setShowText(!showText)}
                aria-hidden="true"
              >
                {array[indexSlider].description}
              </p>
            </div>
            <div>
              <img
                className="img-container-fluid blur"
                src={
                  array[indexSlider + 1 === array.length ? 0 : indexSlider + 1]
                    .src
                }
                alt="name"
                key={indexSlider + 1 === array.length ? 0 : indexSlider + 1}
                onClick={handleNext}
                aria-hidden="true"
              />
            </div>
            <div className="presentation-txt">
              <h2>Presentation</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Doloribus, voluptas deserunt dolores qui eum nam veritatis earum
                quia voluptate quaerat architecto quos nisi laborum commodi
                explicabo dolor rem repellat saepe!
              </p>
              <Link to="/login" id="button-login">
                Login Or Register
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accueil;
