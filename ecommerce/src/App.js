import {BrowserRouter, Routes, Route} from "react-router-dom"
import React from 'react' 
import { NavBar } from "./components/NavBar.jsx";
import { ItemListContainer } from "./components/ItemListContainer.jsx";
function App() {
  const tituloDeCategoria = "Monedas";
  const tituloDeProducto = ""
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={tituloDeProducto} />} />
          <Route path="/category/:id" element={<ItemListContainer greeting={tituloDeCategoria} />} />
        </Routes>
        <p id="pie-de-pagina"> Todas las monedas comercializadas en este sitio tienen su código KM correspondiente y no son réplicas</p>
      </BrowserRouter>
    </div>
      );
}

export default App;
