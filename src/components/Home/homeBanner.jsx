import React, { useState } from "react";
// lottie
import Lottie from "lottie-react";
// animations
import smallHeartBg from "../../assets/animations/small-heart-bg.json";
// font-awesome-component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// font-awesome-icon
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const HomeBanner = ({ handleLongPress }) => {
  const [holdTimer, setHoldTimer] = useState(null);

  const handleMouseDown = () => {
    const timer = setTimeout(() => {
      handleLongPress();
    }, 1800);
    setHoldTimer(timer);
  };

  const handleMouseUp = () => {
    clearTimeout(holdTimer);
  };

  return (
    <>
      <div className="vh-100 vw-100 d-flex justify-content-center align-items-center overflow-hidden">
        <div className="h-100 w-100 d-flex flex-column align-items-center justify-content-center position-relative">
          <h1 className="f-love-day text-white mb-5">
            <FontAwesomeIcon icon={faHeart} className="fs-1" />
            &nbsp;Hello My Baby Phoo Phoo!&nbsp;
            <FontAwesomeIcon icon={faHeart} className="fs-1" />
          </h1>
          <button
            className="btn-heart active py-1 px-4"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
          >
            <FontAwesomeIcon icon={faHeart} className="fs-1" />
          </button>
          <h1 className="f-love-day text-white mt-5">Please Hold My Heart</h1>
        </div>
        <Lottie
          animationData={smallHeartBg}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1, // This ensures the animation stays in the background
            backgroundColor: "#D90368",
          }}
        />
      </div>
    </>
  );
};

export default HomeBanner;
