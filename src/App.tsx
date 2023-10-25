import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Home from "./pages/HomePage/Home";
import ContainPage from "./pages/ContainPage/ContainPage";
import AcceptancePage from "./pages/AcceptancePage/AcceptancePage";
import UnloadingPage from "./pages/UnloadingPage/UnloadingPage";
import DrainPage from "./pages/DrainPage/DrainPage";
import Error from "./pages/Error/Error";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <Router>
      <ScrollToTop></ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/containing" element={<ContainPage />}></Route>
        <Route path="/services/acceptance" element={<AcceptancePage />}></Route>
        <Route path="/services/unloading" element={<UnloadingPage />}></Route>
        <Route path="/services/drain" element={<DrainPage />}></Route>
        <Route path="/error" element={<Error />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
