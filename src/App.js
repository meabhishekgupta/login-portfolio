import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import Undermaintenance from "./Pages/Undermaintenance";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Undermaintenance />} />
        <Route path="/About" element={<Undermaintenance />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
