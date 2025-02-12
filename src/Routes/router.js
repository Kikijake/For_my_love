import React from "react";
import { Routes, Route} from "react-router-dom";
import { Home, Quiz } from "./pages";

const Router = () => {
  return (
    <Routes>
      <Route path="*" name="homeScreen" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  );
};

export default Router;
