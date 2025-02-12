import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Quiz } from "./pages";

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" name="homeScreen" element={<Home />} />
      {/* <Route path="/quiz" element={<Quiz />} /> */}
    </Routes>
  );
};

export default Router;
