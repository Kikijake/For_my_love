import React, { useEffect, useState } from "react";
import KoKhant1 from "../../assets/photos/KoKhant1.png"
import KoKhant2 from "../../assets/photos/KoKhant2.png"
// lottie
import Lottie from "lottie-react";
// animations
import smallHeartBg from "../../assets/animations/small-heart-bg.json";
import { Link } from "react-router-dom";

const Content = ({ images }) => {
  const [cardMove, setCardMove] = useState("");
  const [cardHide, setCardHide] = useState({
    cardCorner: "",
    cardCorner2: "",
  });
  useEffect(() => {
    setCardMove("active");
  }, []);
  return (
    <div className="vh-100 bg-pink d-flex justify-content-center align-items-center">
      <div
        className={`content-card ${cardMove} d-flex justify-content-center overflow-hidden col`}
      >
        <div className="card-bg">
          <img
            src={images.KoKhant2}
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
            src={images.KoKhant1}
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
              ကို့ကိုအမြဲ ချစ်ပေးပြီး ကို့ကို <br />
              ယုံကြည်ပေးလို့ကျေးဇူးပါနော်လဲ့ရေ.... <br /> Vday
              မှာနောက်ကျသွားတဲ့အတွက် sorry ပါနော်။
            </p>
          </div>
          <div className="card-corner-text second f-u-moe">
            <p>
              အနာဂတ်မှာ လဲ့အတွက် <br /> ပြည့်စုံတဲ့ လက်တွဲဖော်တစ်‌‌ယောက် အနေနဲ့{" "}
              <br />
              ကို့ဘဝအဆုံးထိ လဲ့ကိုပျော်‌ရွှင်မှုတွေပေးနိုင်အောင် <br />
              ကြိုးစားသွားမယ်နော်... <br />
              အရမ်းချစ်တယ်နော်... လဲ့ <br />
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
