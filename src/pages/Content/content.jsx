import React, { useEffect, useState } from "react";
import phoo from "../../assets/photos/phoo.png";
import yePhoo from "../../assets/photos/Ye_Phoo.png";
// lottie
import Lottie from "lottie-react";
// animations
import smallHeartBg from "../../assets/animations/small-heart-bg.json";

const Content = ({ startCotent }) => {
  const [cardMove, setCardMove] = useState("");
  const [cardHide, setCardHide] = useState({
    cardCorner: "",
    cardCorner2: "",
  });
  useEffect(() => {
    setCardMove("active");
  }, [startCotent]);
  return (
    <div className="vh-100 bg-pink d-flex justify-content-center align-items-center">
      <div
        className={`content-card ${cardMove} d-flex justify-content-center overflow-hidden col`}
      >
        <div className="card-bg">
          <img
            src={phoo}
            className={`card-corner ${cardMove} ${cardHide.cardCorner}`}
            alt=""
            onMouseEnter={() =>
              setCardHide((prev) => ({ ...prev, cardCorner2: "hide" }))
            }
            onMouseLeave={() =>
              setCardHide((prev) => ({ ...prev, cardCorner2: "" }))
            }
          />
          <img
            src={yePhoo}
            className={`card-corner2 ${cardMove} ${cardHide.cardCorner2}`}
            alt=""
            onMouseOver={() =>
              setCardHide((prev) => ({ ...prev, cardCorner: "hide" }))
            }
            onMouseLeave={() =>
              setCardHide((prev) => ({ ...prev, cardCorner: "" }))
            }
          />
          <div className="card-corner-text notice f-love-day">
            <p>
              Happy <br /> Valentine's Day
            </p>
          </div>
          <div className="card-corner-text first f-u-moe">
            <p>
              ကောင်မ‌လေးရေအမြဲတမ်းချစ်ဖို့ကောင်းနေလို့ <br />{" "}
              ကိုကိုရူးရပါတော့မယ်
            </p>
          </div>
          <div className="card-corner-text second f-love-day">
            <p>
              Hello My pookie Phoo Phoo <br /> My pookie Phoo Phoo
            </p>
          </div>
          <a href="/quiz" className="quiz f-love-day">
            Quiz{`->`}
          </a>
        </div>
      </div>
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
    </div>
  );
};

export default Content;
