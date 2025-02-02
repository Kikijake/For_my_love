import React, { useEffect, useMemo, useState } from "react";
import paper from "../../assets/photos/paper.png";
import paperPiece from "../../assets/photos/paper-piece.png";
import phoo from "../../assets/photos/phoo.png";
import yePhoo from "../../assets/photos/Ye_Phoo.png";

const Content = ({ startCotent }) => {
  const [cardMove, setCardMove] = useState("");
  useEffect(() => {
    setCardMove("active");
  }, [startCotent]);
  return (
    <div className="vh-100 bg-pink d-flex justify-content-center align-items-center">
      <div
        className={`content-card ${cardMove} d-flex justify-content-center overflow-hidden col`}
      >
        <div className="card-bg">
          <img src={phoo} className={`card-corner ${cardMove}`} alt="" />
          <img src={yePhoo} className={`card-corner2 ${cardMove}`} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Content;
