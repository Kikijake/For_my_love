import React, { useState } from "react";
// lottie
import Lottie from "lottie-react";
// animations
import smallHeartBg from "../../assets/animations/small-heart-bg.json";
// font-awesome-component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// font-awesome-icon
import { faHeart } from "@fortawesome/free-solid-svg-icons";
// Page Component
import HomeBanner from "../../components/Home/homeBanner";
import Content from "../Content/content";

const Homepage = () => {
  const [startContent, setStartContent] = useState(false);
  const handleLongPress = () => {
    setStartContent(true);
  };

  return (
    <>
      {startContent ? (
        <Content />
      ) : (
        <HomeBanner handleLongPress={handleLongPress} />
      )}
    </>
  );
};

export default Homepage;
