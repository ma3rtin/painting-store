import Home from "./layout/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./layout/About";
import Contact from "./layout/Contact";
import Cart from "./components/Cart";
import NotFound from "./layout/NotFound";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/paintings/:paintingId" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
