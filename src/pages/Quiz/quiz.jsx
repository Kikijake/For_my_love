import React, { useEffect, useState } from "react";
import LottieBackground from "../../components/background/lottieBackground";

const Quiz = () => {
  const [showContinue, setShowContinue] = useState(false);
  useEffect(() => {
    const checkLevel = JSON.parse(localStorage.getItem("level"));
    console.log(checkLevel);
    if (checkLevel && checkLevel > 1) {
      setShowContinue(true);
    }
  }, []);
  return (
    <>
      <div className="vh-100 bg-pink d-flex justify-content-center align-items-center">
        <div className="quiz-card d-flex flex-column align-items-center">
          <h1 className="mb-5 header f-love-day">Koko's Silly Quiz</h1>
          <div className="d-flex flex-column quiz-btns">
            {showContinue && (
              <p className="mb-2 f-love-day btn-1">Continue</p>
            )}
            <p className="f-love-day btn-2">Start New</p>
          </div>
        </div>
        <LottieBackground />
      </div>
    </>
  );
};

export default Quiz;
