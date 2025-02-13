import React from "react";

const Home = React.lazy(() => import("../pages/Home/home.jsx"));
const Quiz = React.lazy(() => import("../pages/Quiz/quiz.jsx"));
const Questions = React.lazy(() => import("../pages/Questions/questions.jsx"));
const Result = React.lazy(() => import("../pages/Final/result.jsx"));

export { Home, Quiz, Questions, Result };
