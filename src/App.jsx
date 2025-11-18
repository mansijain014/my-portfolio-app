import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Rentals from "./pages/Rentals";

function App() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<HomePage />} />

      {/* Service Detail Pages */}
      {/* <Route path="/video-production" element={<VideoProduction />} />
      <Route path="/editing" element={<Editing />} />
      <Route path="/ad-films" element={<AdFilms />} />
      <Route path="/event-coverage" element={<EventCoverage />} />
      <Route path="/social-media" element={<SocialMedia />} /> */}
      <Route path="/rentals" element={<Rentals />} />
    </Routes>
  );
}

export default App;
