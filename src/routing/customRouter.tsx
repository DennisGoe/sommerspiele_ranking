import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPage from "../pages/adminPage";
import RankingPage from "../pages/rankingPage";
import RouteNotFound from "../pages/routeNotFound";
import AddRemovePage from "../pages/addRemovePage";
import AddTeamPage from "../pages/addTeamPage";

const CustomRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RankingPage />} />
        <Route path="/admin" element={<AdminPage />} />

        <Route path="*" element={<RouteNotFound />} />
      </Routes>
    </Router>
  );
};

export default CustomRouter;
