import React, { useEffect, useState } from "react";
import LottieBackground from "../../components/background/lottieBackground";
import { Link } from "react-router-dom";

const Result = () => {
  const [marks, setMarks] = useState(0);
  useEffect(() => {
    const currentMarks = JSON.parse(localStorage.getItem("marks"));
    setMarks(currentMarks);
  }, []);
  return (
    <div className="vh-100 bg-pink d-flex justify-content-center align-items-center">
      <div className="result-card">
        <div className="w-100 h-100  d-flex flex-column justify-content-center align-items-center">
          <h1 className="f-u-moe card-text">ရမှတ် = {marks}</h1>
          {marks >= 5 ? (
            <h1 className="f-u-moe text-center card-text">
              အမှတ်ပြည့်ရတဲ့ အတွက် <br /> အတော်ဆုံးရည်းစားလေးဆုကို
              ချီးမြှင့်လိုက်ပါတယ် <br /> Screenshot လေးပြပြီး
              ချောကလပ်လာထုတ်လို့ရပါပြီ <br /> 🍫
            </h1>
          ) : marks >= 3 ? (
            <h1 className="f-u-moe text-center card-text">
              အောင်မှတ်ရတဲ့ အတွက်ဂုဏ်ယူပါတယ် <br /> ဒါပေမဲ့ အမှတ်ပြည့်ရမှ
              ချောကလပ်ကျွေးမှာပါ။ <br />
              😋
            </h1>
          ) : (
            <h1 className="f-u-moe text-center card-text">
              စိတ်တောင်မကောင်းဘူး 😭 <br /> ပြန်ဖြေလိုက်ပါဦးနော်
            </h1>
          )}
        </div>
        <Link to="/quiz" className="quiz f-love-day">
          Take the quiz again{`->`}
        </Link>
      </div>
      <LottieBackground />
    </div>
  );
};

export default Result;
