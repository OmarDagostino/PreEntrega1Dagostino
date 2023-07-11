import { ItemDetail } from "../components/ItemDetail";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import data from "../assets/data/monedas1.json";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((resolve, rejected) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });

    promesa.then((result) => {
      const selectedProduct = result.find((product) => product.id === parseInt(id));
      setProduct(selectedProduct || {});
    });
  }, [id]);

  return (
    <Container className="mt-4">
      <h1>Detalle de la moneda</h1>
      {Object.keys(product).length === 0 ? (
        <div>cargando...</div>
      ) : (
        <ItemDetail moneda={product} />
      )}
    </Container>
  );
};

