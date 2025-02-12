import React from "react";

const Home = React.lazy(() => import("../pages/Home/home.jsx"));
const Quiz = React.lazy(() => import("../pages/Quiz/quiz.jsx"));

export { Home, Quiz };
