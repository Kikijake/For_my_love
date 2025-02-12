import React from "react";
// lottie
import Lottie from "lottie-react";
// animations
import loveCat from "../../assets/animations/catFallInLove.json";

const Loading = () => {
  return (
    <div className="vh-100 bg-pink d-flex justify-content-center align-items-center">
      <Lottie
        animationData={loveCat}
        style={{
          top: 0,
          left: 0,
          zIndex: 1, // This ensures the animation stays in the background
          backgroundColor: "#D90368",
        }}
      />
    </div>
  );
};

export default Loading;
