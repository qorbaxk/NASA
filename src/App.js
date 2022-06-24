import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Gallery from "./pages/Gallery";
import Apod from "./pages/Apod";
import "bootstrap/dist/css/bootstrap.min.css";
import Sharing from "./pages/Sharing";

function App() {
  return (
    <div
      className="all-background"
      style={{
        backgroundImage:
          "url(" +
          "https://img.freepik.com/free-vector/space-background-with-stars-vector-illustration_97886-319.jpg" +
          ")",
      }}
    >
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/apod" element={<Apod />} />
        <Route path="/sharing" element={<Sharing />} />
      </Routes>
    </div>
  );
}

export default App;
