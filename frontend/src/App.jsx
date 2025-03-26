import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Posts from "./pages/Posts.jsx";
import Buttons from "./pages/Buttons.jsx";
import CarouselPage from "./pages/carousel.jsx";
import QnAPage from "./pages/QnAPage.jsx"; // ✅ Add this line

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/buttons" element={<Buttons />} />
        <Route path="/carousel" element={<CarouselPage />} />
        <Route path="/qna" element={<QnAPage />} /> {/* ✅ Add this line */}
      </Routes>
    </Router>
  );
}

export default App;


