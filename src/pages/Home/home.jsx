import React, { useState } from "react";
// Page Component
import HomeBanner from "../../components/Home/homeBanner";
import Content from "../Content/content";

const Homepage = () => {
  const [startContent, setStartContent] = useState(false);
  const handleLongPress = () => {
    setStartContent(true);
  };

  return (
    <>
      {startContent ? (
        <Content />
      ) : (
        <HomeBanner handleLongPress={handleLongPress} />
      )}
    </>
  );
};

export default Homepage;
