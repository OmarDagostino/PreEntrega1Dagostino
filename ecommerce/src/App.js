import {BrowserRouter, Routes, Route} from "react-router-dom"
import {ItemDetailContainer} from "./components/ItemDetailContainer"
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
          <Route path="/item/:id" element={<ItemDetailContainer  />} />
       
        </Routes>
        <div id="pie-de-pagina"> 
          <p> Todas las monedas comercializadas en </p>
          <p> este sitio tienen su código KM </p>
           <p>correspondiente y son originales </p>
        </div>
      </BrowserRouter>
    </div>
      );
}

export default App;
