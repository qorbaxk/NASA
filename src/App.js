import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Gallery from "./pages/Gallery";
import Apod from "./pages/Apod";
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <Route path="/Apod" element={<Apod />} />
      </Routes>
    </div>
  );
}

export default App;
