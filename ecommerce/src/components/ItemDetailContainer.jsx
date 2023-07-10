import {ItemDetail} from "../components/ItemDetail"
export const ItemDetailContainer = props => 
{
    const [product, setProduct ] = useState ([])

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
        
            
            setProduct(result [2]) 
        })
    }, [])
    return (
        <Container className="mt-4">
            <h1> Detalle de la moneda </h1>
            {product.length === 0 ? (<div>cargando...</div>) : 
            <ItemDetail moneda={product} />
        }
        </Container>
    )
}