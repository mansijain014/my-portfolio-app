import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Rentals from "./pages/Rentals";
import Production from "./pages/Production";
import EventCoverage from "./pages/EventCoverage";
import CreativeServicesSplit from "./pages/Digitals";

function App() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<HomePage />} />

      {/* Service Detail Pages */}
      <Route path="/production" element={<Production />} />
      <Route path="/events" element={<EventCoverage />} />
      <Route path="/digital" element={<CreativeServicesSplit />} />
      <Route path="/rentals" element={<Rentals />} />
    </Routes>
  );
}

export default App;
