import React, { useState, useEffect } from "react";
// Page Component
import HomeBanner from "../../components/Home/homeBanner";
import Content from "../Content/content";
import { loadImage } from "../../utils";
import KoKhant1png from "../../assets/photos/KoKhant1.png";
import KoKhant2png from "../../assets/photos/KoKhant2.png";

const Homepage = () => {
  const [startContent, setStartContent] = useState(false);
  const [images, setImages] = useState({
    KoKhant1: KoKhant1png,
    KoKhant2: KoKhant2png,
  });
  const handleLongPress = () => {
    setStartContent(true);
  };

  useEffect(() => {
    loadImage(KoKhant1png)
      .then((src) => {
        setImages((prev) => ({ ...prev, KoKhant1: src }))
        console.log("loaded image 1", src);  
      })
      .catch((err) => console.error("Failed to load image", err));
    loadImage(KoKhant2png)
      .then((src) => {
        setImages((prev) => ({ ...prev, KoKhant2: src }))
        console.log("loaded image 2", src);
      })
      .catch((err) => console.error("Failed to load image", err));
  }, []);

  return (
    <>
      {startContent ? (
        <Content images={images}/>
      ) : (
        <HomeBanner handleLongPress={handleLongPress} />
      )}
    </>
  );
};

export default Homepage;
