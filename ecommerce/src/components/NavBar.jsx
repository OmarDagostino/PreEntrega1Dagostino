import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom';
import Nav from'react-bootstrap/Nav';
import cart from '../assets/cart.png';
import data from '../assets/data/monedas1.json';
const paises = data.map (moneda => moneda.category);
const pais = new Set(paises)

export const NavBar = () => (
  <Navbar> 
    <Container> 
      <Navbar.Brand> Venta de monedas de colección </Navbar.Brand>
      <Nav className="me-auto"> 
        {[...pais].map (item => (
            <NavLink className="nav-link" to={`/category/${item}`} key={item}>  
            {item}
            </NavLink>
          )) 
        }
        </Nav>
        <img src={cart} alt="changuito" id="carrito" />
    </Container>
  </Navbar>)
  