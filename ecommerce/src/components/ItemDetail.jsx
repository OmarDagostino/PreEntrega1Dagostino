export const ItemDetail = ({moneda}) => {
  
    return (<>
<div> {moneda.valor} </div>
 <div> {moneda.anio} </div>  
 <div> {moneda.km} </div>
 <img src={moneda.imagen} alt={moneda.valor} />
 </>    )
    }
    