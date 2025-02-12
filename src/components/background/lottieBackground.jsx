import React from "react";
// lottie
import Lottie from "lottie-react";
// animations
import smallHeartBg from "../../assets/animations/small-heart-bg.json"

const LottieBackground = () => {
  return (
      <Lottie
        animationData={smallHeartBg}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1, // This ensures the animation stays in the background
          backgroundColor: "#D90368",
        }}
      />
  );

}

export default LottieBackground;