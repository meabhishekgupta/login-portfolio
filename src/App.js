import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
