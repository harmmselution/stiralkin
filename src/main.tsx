import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./assets/styles/index.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RepairPage } from "./components/RepairPage/RepairPage.tsx";
import { MainLayout } from "./components/MainLayout/MainLayout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/repair/:id" element={<RepairPage />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
);
