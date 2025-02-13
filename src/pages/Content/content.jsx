import React, { useEffect, useState } from "react";
import phoo from "../../assets/photos/phoo.png";
import yePhoo from "../../assets/photos/Ye_Phoo.png";
// lottie
import Lottie from "lottie-react";
// animations
import smallHeartBg from "../../assets/animations/small-heart-bg.json";
import { Link } from "react-router-dom";

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
              အရမ်းချစ်ဖို့ကောင်းတဲ့ ကိုကို့ကောင်မလေးရေ <br />
              ကိုကို့အချစ်တွေက မင်းအတွက်ဖြစ်သလို <br />
              မင်းအချစ်တွေကလဲ ကိုကို့အတွက်ပဲဖြစ်ရမယ်နော်။ <br />
              ရှေ့လျှောက် ဂရုစိုက်မှုတွေနဲ့အတူ <br />{" "}
              ပိုပြီးပိုပြီးချစ်သွားကြရအောင်နော် <br />
              အရမ်းချစ်တယ်။
            </p>
          </div>
          <div className="card-corner-text second f-u-moe">
            <p>
              ‌အရမ်းချစ်ရပါသော ရွှေဖူးလေး <br />
              ကိုကို့ရဲ့ မပြည့်စုံမှုတွေကို နားလည်ပေးပြီး <br />
              ခုချိန်ထိအနားမှာ ရှိနေပေးတဲ့အတွက် ကျေးဇူးပါ။ <br />
              အနာဂတ်မှာ မင်းလေးနဲ့အတူ အမှတ်တရတွေ အများကြီး <br />
              ဖန်တီး သွားနိုင်ဖို့ မျှော်လင့်ပါတယ်။
            </p>
          </div>
          <Link to="/quiz" className="quiz f-love-day">
            Quiz{`->`}
          </Link>
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
