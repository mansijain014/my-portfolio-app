import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Rentals from "./pages/Rentals";
import Production from "./pages/Production";

function App() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<HomePage />} />

      {/* Service Detail Pages */}
      <Route path="/production" element={<Production />} />
      {/*<Route path="/editing" element={<Editing />} />
      <Route path="/ad-films" element={<AdFilms />} />
      <Route path="/event-coverage" element={<EventCoverage />} />
      <Route path="/social-media" element={<SocialMedia />} /> */}
      <Route path="/rentals" element={<Rentals />} />
    </Routes>
  );
}

export default App;
