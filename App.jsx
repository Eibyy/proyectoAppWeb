import { BrowserRouter, Route, Routes } from "react-router-dom";


import Login from './pages/Login'
import Registro from "./pages/Registro";
import MisPublicaciones from './pages/MisPublicaciones'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Publicar from './pages/Publicar'


function App() {


  const shouldShowNavbar = window.location.pathname !== '/' && window.location.pathname !== '/registro';

 


  return (
    <BrowserRouter>
    {shouldShowNavbar ? <Navbar /> : ""}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/mispublicaciones" element={<MisPublicaciones />} />
        <Route path="/home" element={<Home />} />
        <Route path="/publicar" element={<Publicar />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
