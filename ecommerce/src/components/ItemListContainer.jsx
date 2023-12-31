import Container from "react-bootstrap/Container"
import React from "react"
import {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import data from "../assets/data/monedas1.json"
import {ItemList} from "../components/ItemList"
export const ItemListContainer = props => 
{
    const [products, setProducts ] = useState ([])
    const { id } = useParams ()
    useEffect (() => 
    {
        const promesa = new Promise (( resolve, rejected) =>
        {
            setTimeout 
            ( () =>
                {
                resolve (data)
                },2000
            )    
        })
        promesa.then(result => {
            if (id) { setProducts(result.filter((producto) => producto.category === id))}
            else {
            setProducts(result) }
        })
    }, [id])
    return (
        <Container className="mt-4">
            <h1> {props.greeting} </h1>
            {products.length === 0 ? (<div>cargando...</div>) : 
            <ItemList products={products} />
        }
        </Container>
    )
}