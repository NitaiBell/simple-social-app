import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Posts from "./pages/Posts.jsx";
import Buttons from "./pages/Buttons.jsx"; // ✅ new

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/buttons" element={<Buttons />} /> {/* ✅ new route */}
      </Routes>
    </Router>
  );
}

export default App;

