import React, { useState } from "react";

const Level3 = ({ setLevel }) => {
  const [wrong, setWrong] = useState(false);
  const [right, setRight] = useState(false);
  const rightAnswer = () => {
    setRight(true);
    setWrong(false);
    setTimeout(() => {
      setRight(false);
      setLevel(4);
      localStorage.setItem("level", JSON.stringify(4));
      const currentMarks = JSON.parse(localStorage.getItem("marks"));
      localStorage.setItem("marks", JSON.stringify(currentMarks + 1));
    }, 2000);
  };
  const wrongAnswer = () => {
    setWrong(true);
    setRight(false);
    setTimeout(() => {
      setWrong(false);
      const currentMarks = JSON.parse(localStorage.getItem("marks"));
      localStorage.setItem("marks", JSON.stringify(currentMarks - 1));
    }, 2000);
  };
  return (
    <div className="w-100 level2">
      <h1 className="text-center f-love-day text-white header">Level 3</h1>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="text-center f-u-moe question p-2">
          အကြိုက်ဆုံး Anime
        </div>
        <div className="d-flex f-u-moe flex-column justify-content-center align-items-center multiple-choices mt-3 justify-content-between">
          <div className="q-btn" onClick={rightAnswer}>
            Made In Abyss
          </div>
          <div className="q-btn" onClick={wrongAnswer}>
            One Piece
          </div>
          <div className="q-btn" onClick={wrongAnswer}>
            Chain Saw Man
          </div>
        </div>
        {wrong && (
          <div className="text-center f-u-moe question message mt-3 px-2">
            မှားတယ်နော် အရူးလေး
          </div>
        )}
        {right && (
          <div className="text-center f-u-moe question message mt-3 px-2">
            မှန်‌ပါတယ်ဗျာ
          </div>
        )}
      </div>
    </div>
  );
};

export default Level3;
