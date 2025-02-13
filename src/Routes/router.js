import React from "react";
import { Routes, Route, Navigate} from "react-router-dom";
import { Home, Quiz, Questions, Result } from "./pages";

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" name="homeScreen" element={<Home />} />
      <Route path="/quiz" name="quizScreen" element={<Quiz />} />
      <Route path="/quiz/questions" name="questionsScreen" element={<Questions />} />
      <Route path="/quiz/result" name="resultScreen" element={<Result />} />
    </Routes>
  );
};

export default Router;
