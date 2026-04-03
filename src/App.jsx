"use client";

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Loader from "./utils/Loader";

import HomePage from "./pages/HomePage";
import Rentals from "./pages/Rentals";
import Production from "./pages/Production";
import EventCoverage from "./pages/EventCoverage";
import CreativeServicesSplit from "./pages/Digitals";
import ProjectsSection from "./pages/Projects";

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    let raf1, raf2;
    let timeoutId;

    // 1️⃣ Ensure first paint happens
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        // 2️⃣ Minimum loader time (UX polish)
        timeoutId = setTimeout(() => {
          // 3️⃣ Remove loader after fade
          setTimeout(() => {
            setShowLoader(false);
          }, 600);
        }, 900);
      });
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {showLoader && <Loader fadeOut={!showLoader} />}

      <div
        className={`transition-opacity duration-700 ${
          showLoader ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/video-production-delhi" element={<Production />} />
          <Route path="/event-management" element={<EventCoverage />} />
          <Route
            path="/digital-creative-services"
            element={<CreativeServicesSplit />}
          />
          <Route path="/camera-rentals-delhi" element={<Rentals />} />
          <Route path="/production-projects" element={<ProjectsSection />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
