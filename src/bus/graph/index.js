// Core
import React from "react";

// Components
import { Header } from "./components/header";
import { SideBar } from "./components/sideBar";
import { Dashboard } from "./components/dashboard";

export const Graph = () => {
  return (
    <div className="graph">
      <Header />
      <SideBar />
      <Dashboard />
    </div>
  );
};
