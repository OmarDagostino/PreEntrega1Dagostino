import React from 'react';
import cart from '../assets/cart.png';

export const NavBar = () => (
  <header>
    <nav>
      <h3>Venta de monedas de colección</h3>
      <ul>
        <li>
          <a href="/">Home</a>
          <a href="/monedas">Monedas</a>
          <a href="/contacto">Contacto</a>
        </li>
      </ul>
    </nav>
    <img src={cart} alt="changuito" /> 0
  </header>
);

