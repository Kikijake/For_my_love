import React from "react";
import { simulateDelay } from "../utils";

const Home = React.lazy(() =>
  simulateDelay(() => import("../pages/Home/home.jsx"))
);
const Quiz = React.lazy(() =>
  simulateDelay(() => import("../pages/Quiz/quiz.jsx"))
);

export { Home, Quiz };
