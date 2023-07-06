// import {Item}  from "../components/Item"
// export const ItemList = ({ products}) => products.map(moneda => <Item moneda={moneda}/>)
import { Item } from "../components/Item";

export const ItemList = ({ products }) => (
  <>
    {products.map((moneda) => (
      <Item key={moneda.id} moneda={moneda} />
    ))}
  </>
);
  