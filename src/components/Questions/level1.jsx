import React, { useState } from "react";

const Level1 = ({ setLevel }) => {
  const [wrong, setWrong] = useState(false);
  const [right, setRight] = useState(false);
  const rightAnswer = () => {
    setRight(true);
    setWrong(false);
    setTimeout(() => {
      setRight(false);
      setLevel(2);
      localStorage.setItem("level", JSON.stringify(2));
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
    <div className="w-100 level1">
      <h1 className="text-center f-love-day text-white header">Level 1</h1>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="text-center f-u-moe question p-2">
          ကိုကို့အကြိုက်ဆုံး emoji ကို ရွေးပါ။
        </div>
        <div className="d-flex justify-content-center multiple-choices mt-5 justify-content-between">
          <div className="q-btn" onClick={wrongAnswer}>
            😂
          </div>
          <div className="q-btn" onClick={rightAnswer}>
            😋
          </div>
          <div className="q-btn" onClick={wrongAnswer}>
            👿
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

export default Level1;
