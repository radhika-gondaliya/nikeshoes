import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Contact from "./component/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./component/About";
import Menu from "./component/Menu";
import Men from "./component/Men";
import Women from "./component/Women";
import Kids from "./component/Kids";
import Footer from "./component/Footer";
import Login from "./component/Login";
function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Menu" element={<Menu />} />

            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Men" element={<Men />} />
            <Route path="/Women" element={<Women />} />
            <Route path="/Kids" element={<Kids />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
