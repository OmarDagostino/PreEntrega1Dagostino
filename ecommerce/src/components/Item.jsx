import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom"
export const Item = ({moneda}) => {
  return (
        <Card
        style={{ width:"18rem"}}
        key={moneda.id}
        className="float-start"
        >
        <Card.Img variant = "top" src={moneda.imagen} alt={moneda.valor} />
        <Card.Body>
            <Card.Title> {moneda.valor} </Card.Title>
            <Card.Text> KM : {moneda.km} </Card.Text>
            <Card.Text> Año de acunación : {moneda.anio} </Card.Text>
            <Link to={`/item/${moneda.id}`}>
            <Button variant="primary">ver detalle</Button>
            </Link>
        </Card.Body>
        </Card>
    ) 
    }
   