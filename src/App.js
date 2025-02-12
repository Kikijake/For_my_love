import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import "./FontFamily.scss";
import "./App.scss";
import Router from "./Routes/router";
import Loading from "./components/Loading/loading";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Router />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
