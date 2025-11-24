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
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // 1) Minimum loader time
    const minTime = new Promise((resolve) => setTimeout(resolve, 1200));

    // 2) Wait for images (video excluded)
    const waitImages = Promise.all(
      Array.from(document.images)
        .filter((img) => !img.complete)
        .map(
          (img) =>
            new Promise((resolve) => {
              img.onload = img.onerror = resolve;
            })
        )
    );

    // 3) If Showreel video exists, wait for it
    const video = document.querySelector("video");
    const waitVideo = new Promise((resolve) => {
      if (!video) return resolve();
      if (video.readyState >= 2) return resolve(); // already loaded
      video.onloadeddata = resolve;
      video.onerror = resolve; // don't block forever
    });

    Promise.all([minTime, waitImages, waitVideo]).then(() => {
      setLoaded(true);
    });
  }, []);

  return (
    <>
      {!loaded && <Loader fadeOut={loaded} />}

      <div
        className={`transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/production" element={<Production />} />
          <Route path="/events" element={<EventCoverage />} />
          <Route path="/digital" element={<CreativeServicesSplit />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/projects" element={<ProjectsSection />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
