import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LottieBackground from "../../components/background/lottieBackground";

const Quiz = () => {
  const [showContinue, setShowContinue] = useState(false);
  const navigate = useNavigate();
  const handleStart = () => {
    localStorage.setItem("level", JSON.stringify(1));
    localStorage.setItem("marks", JSON.stringify(0));
    navigate("/quiz/questions");
  }
  useEffect(() => {
    const checkLevel = JSON.parse(localStorage.getItem("level"));
    if (checkLevel && checkLevel > 1) {
      setShowContinue(true);
    }
  }, []);
  return (
    <>
      <div className="vh-100 bg-pink d-flex justify-content-center align-items-center">
        <div className="quiz-card d-flex flex-column align-items-center justify-content-center">
          <h1 className="mb-5 header f-love-day">Koko's Silly Quiz</h1>
          <div className="d-flex flex-column justify-content-center quiz-btns">
            {showContinue && (
              <p className="mb-2 f-love-day btn-1" onClick={() =>navigate("/quiz/questions")}>Continue</p>
            )}
            <p className="f-love-day btn-2" onClick={handleStart}>Start New</p>
          </div>
        </div>
        <LottieBackground />
      </div>
    </>
  );
};

export default Quiz;
