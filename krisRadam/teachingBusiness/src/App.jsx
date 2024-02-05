import { Routes, Route } from "react-router-dom";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Services from "./routes/Services";
import SignUp from "./routes/SignUp";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className="text-primary">Hello App!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
