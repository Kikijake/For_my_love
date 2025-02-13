import React, { useEffect, useState } from "react";
import LottieBackground from "../../components/background/lottieBackground";
import Level1 from "../../components/Questions/level1";
import Level2 from "../../components/Questions/level2";
import Level3 from "../../components/Questions/level3";
import Level4 from "../../components/Questions/level4";
import Level5 from "../../components/Questions/level5";

const Questions = () => {
  const [level, setLevel] = useState(0);

  useEffect(() => {
    const checkLevel = JSON.parse(localStorage.getItem("level"));
    setLevel(checkLevel);
  }, []);

  return (
    <div className="vh-100 bg-pink d-flex justify-content-center align-items-center">
      <div className="z2 questions-card">
        {level === 1 && <Level1 setLevel={setLevel} />}
        {level === 2 && <Level2 setLevel={setLevel} />}
        {level === 3 && <Level3 setLevel={setLevel} />}
        {level === 4 && <Level4 setLevel={setLevel} />}
        {level === 5 && <Level5 />}
      </div>
      <LottieBackground />
    </div>
  );
};

export default Questions;
