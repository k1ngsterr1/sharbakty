import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
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
      <ScrollToTop />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/index.html" element={<Navigate replace to="/home" />} />
        <Route path="/index.shtml" element={<Navigate replace to="/home" />} />
        <Route path="/services/containing" element={<ContainPage />} />
        <Route path="/services/acceptance" element={<AcceptancePage />} />
        <Route path="/services/unloading" element={<UnloadingPage />} />
        <Route path="/services/drain" element={<DrainPage />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
